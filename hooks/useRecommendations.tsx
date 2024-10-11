import { Movie } from "@/components/MovieCard";
import { getMovieDetails } from "@/utils/GetMovieDetails";
import { useState, useCallback } from "react";

function useRecommendations() {
  const [prompt, setPrompt] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isGot = movies ? movies.length >= 1 : false;

  const fetchRecommendations = useCallback(async () => {
    setLoading(true);
    setError(null);
    setMovies([]);
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations. Please try again.");
      }

      const data = await response.json();

      data.recommendations.forEach(async (recommendation: any) => {
        const movieDetails = await getMovieDetails(recommendation.movieTitle);
        setMovies((prevMovies) => [
          ...prevMovies,
          {
            id: movieDetails.movieId,
            title: movieDetails.title,
            explanation: recommendation.explanation,
            trailer: recommendation.trailer,
            platforms: recommendation.platforms,
            year: movieDetails.release_date,
            poster: movieDetails.posterPath,
            backdropPoster: movieDetails.backdroPath,
            rating: movieDetails.vote_average,
            genres: movieDetails.genres,
          },
        ]);
      });
    } catch (err: any) {
      setError(err.message || "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, [prompt]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await fetchRecommendations();
      setPrompt("");
    },
    [fetchRecommendations]
  );

  return {
    prompt,
    setPrompt,
    isGot,
    loading,
    error,
    handleSubmit,
    movies,
  };
}

export default useRecommendations;
