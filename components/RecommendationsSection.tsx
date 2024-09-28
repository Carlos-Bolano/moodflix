import { Recommendation } from "@/hooks/useRecommendations";
import MovieCard from "./MovieCard";

export default function RecommendationsSection({
  recommendations,
  isGot,
}: {
  recommendations: Recommendation[];
  isGot: boolean;
}) {
  if (recommendations.length === 0 && isGot) {
    return (
      <div className="flex items-center justify-center mt-5 col-span-2">
        <p className="text-red-400 text-center">No recommendations found</p>
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {recommendations.map((recommendation) => (
        <MovieCard
          key={recommendation.movieTitle}
          movieTitle={recommendation.movieTitle}
          explanation={recommendation.explanation}
          whereToWatch={recommendation.whereToWatch}
        />
      ))}
    </div>
  );
}
