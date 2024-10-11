import MovieCard, { Movie } from "./MovieCard";

export default function RecommendationsSection({
  movies,
  isGot,
}: {
  movies: Movie[];
  isGot: boolean;
}) {
  if (movies.length === 0 && isGot) {
    return (
      <div className="flex items-center justify-center mt-5 col-span-2">
        <p className="text-red-400 text-center">No recommendations found</p>
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-2 gap-4 p-2">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          explanation={movie.explanation}
          trailer={movie.trailer}
          platforms={movie.platforms}
          year={movie.year}
          poster={movie.poster}
          rating={movie.rating}
          genres={movie.genres}
        />
      ))}
    </div>
  );
}
