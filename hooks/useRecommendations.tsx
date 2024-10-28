import { Movie } from "@/components/MovieCard";
import { getMovieDetails } from "@/utils/GetMovieDetails";
import { useState } from "react";

function useRecommendations() {
  const [prompt, setPrompt] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isGot = movies ? movies.length >= 1 : false;

  const fetchRecommendations = async (text?: string) => {
    setLoading(true);
    setError(null);
    setMovies([]);

    try {
      const promptText = text || prompt;
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: promptText }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations. Please try again.");
      }

      const data = await response.json();

      if (data.recommendations.length === 1) {
        const recommendation = data.recommendations[0];
        setMovies((prevMovies) => [
          ...prevMovies,
          {
            id: 23,
            title: recommendation.movieTitle,
            explanation: recommendation.explanation,
            trailer: recommendation.trailer,
            platforms: recommendation.platforms,
            year: "",
            poster: "",
            backdropPoster: "",
            rating: 0,
            genres: [""],
          },
        ]);
      } else {
        data.recommendations.forEach(async (recommendation: any) => {
          const movieDetails = await getMovieDetails(recommendation.movieTitle);
          movieDetails &&
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
                rating: movieDetails.vote_average,
                genres: movieDetails.genres,
              },
            ]);
        });
      }
    } catch (err: any) {
      setError(err.message || "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetchRecommendations();
    setPrompt("");
  };

  return {
    prompt,
    setPrompt,
    isGot,
    loading,
    error,
    handleSubmit,
    movies,
    fetchRecommendations,
    setMovies,
    setError,
  };
}

export default useRecommendations;
