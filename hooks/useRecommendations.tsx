import { useState, useCallback } from "react";

export interface Recommendation {
  movieTitle: string;
  explanation: string;
  whereToWatch: string[];
}
function useRecommendations() {
  const [prompt, setPrompt] = useState<string>("");
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isGot = recommendations ? recommendations.length >= 1 : false;

  const fetchRecommendations = useCallback(async () => {
    setLoading(true);
    setError(null);
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
      setRecommendations(data.recommendations);
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
    recommendations,
    isGot,
    loading,
    error,
    handleSubmit,
  };
}

export default useRecommendations;
