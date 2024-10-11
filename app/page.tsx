"use client";
import EmojiRain from "@/components/EmojiRain";
import ErrorMessage from "@/components/ErrorMessage ";
import Loader from "@/components/Loader";
import RecommendationsSection from "@/components/RecommendationsSection";
import SearchForm from "@/components/SearchForm";
import useRecommendations from "@/hooks/useRecommendations";
import Link from "next/link";

export default function Home() {
  const {
    prompt,
    setPrompt,
    isGot,
    loading,
    error,
    handleSubmit,
    movies,
  } = useRecommendations();
  return (
    <section className="flex flex-col items-center py-10 relative ">
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
      <p className="font-medium mt-5 text-center text-xl text-gray-600 drop-shadow-sm	">
        Movie Recommender Based on emotions, feelings or mood 🧠
      </p>
      <EmojiRain />
      <SearchForm
        prompt={prompt}
        setPrompt={setPrompt}
        loading={loading}
        handleSubmit={handleSubmit}
      />

      {error ? (
        <ErrorMessage error={error} />
      ) : loading ? (
        <Loader />
      ) : (
        <RecommendationsSection
          movies={movies}
          isGot={isGot}
        />
      )}
    </section>
  );
}
