"use client";
import EmojiRain from "@/components/EmojiRain";
import ErrorMessage from "@/components/ErrorMessage ";
import Loader from "@/components/Loader";
import RecommendationsSection from "@/components/RecommendationsSection";
import SearchForm from "@/components/SearchForm";
import useRecommendations from "@/hooks/useRecommendations";
import Link from "next/link";

export default function Home() {
  const { prompt, setPrompt, isGot, loading, error, handleSubmit, movies } = useRecommendations();
  return (
    <section className="flex flex-col items-center py-10 relative z-10 ">
      <p className="font-semibold mt-5 text-center text-3xl sm:text-4xl md:text-5xl text-gray-600 drop-shadow-sm max-w-[750px]">
        Movie Recommender Based on emotions, feelings or mood
      </p>
      <p className="mt-5 text-center text-lg text-gray-600 drop-shadow-sm max-w-[750px]">
        don&apos;t want to write how you feel?, then{" "}
        <Link className="text-red-400" href="/">
          choose your mood.
        </Link>
      </p>
      <EmojiRain />
      <SearchForm prompt={prompt} setPrompt={setPrompt} loading={loading} handleSubmit={handleSubmit} />
      {error ? (
        <ErrorMessage error={error} />
      ) : loading ? (
        <Loader />
      ) : (
        <RecommendationsSection movies={movies} isGot={isGot} />
      )}
    </section>
  );
}
