"use client";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import { useState } from "react";
export interface Recommendation {
  movieTitle: string;
  explanation: string;
  whereToWatch: string[];
}

export default function Home() {
  const [text, setText] = useState("");
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setRecommendations(data.recommendations);
      console.log(data);
    } catch (error) {
      console.error("Error fetching recommendations", error);
    } finally {
      setLoading(false);
      setText("");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center py-10 container mx-auto">
      <Link
        href="/"
        className="flex items-center justify-center gap-1 text-red-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
          <path d="m6.2 5.3 3.1 3.9" />
          <path d="m12.4 3.4 3.1 4" />
          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
        <h1 className="text-4xl font-medium font-sans">moodflix</h1>
      </Link>
      <h1 className="font-poppins font-medium mt-5">
        Movie Recommender Based on emotions, feelings or mood 🧠
      </h1>
      <div className="mt-20">
        <form
          className="flex flex-col gap-4 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <textarea
            className="focus:outline-red-400 border-2 p-4 w-full rounded-md"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="How are you feeling?"
            rows={2}
            cols={60}
            required
          />
          <button
            disabled={loading}
            className="bg-red-400 px-4 py-2 rounded-md text-white"
            type="submit"
          >
            {loading ? "Getting recommendations" : "Get recomendations 🍿"}
          </button>
        </form>
      </div>
      {loading ? (
        <p className="mt-10">Loading...</p>
      ) : (
        <div className="mt-5 flex flex-col gap-4">
          {recommendations.map((recommendation) => (
            <MovieCard
              key={recommendation.movieTitle}
              movieTitle={recommendation.movieTitle}
              explanation={recommendation.explanation}
              whereToWatch={recommendation.whereToWatch}
            />
          ))}
        </div>
      )}
    </main>
  );
}
