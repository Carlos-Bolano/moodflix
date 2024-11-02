"use client";
import ErrorMessage from "@/components/ErrorMessage ";
import Loader from "@/components/Loader";
import RecommendationsSection from "@/components/RecommendationsSection";
import SearchForm from "@/components/SearchForm";
import useRecommendations from "@/hooks/useRecommendations";
import { useLocale, useTranslations } from "next-intl";
import NavigationLink from "@/components/NavigationLink";

export default function Home() {
  const { prompt, setPrompt, isGot, loading, error, handleSubmit, movies } = useRecommendations();
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <section className="flex flex-col items-center py-10 relative z-10 ">
      <h1
        className={`font-semibold mt-5 text-center text-3xl sm:text-4xl md:text-5xl text-gray-600 drop-shadow-sm max-w-[750px] ${
          locale === "es" ? "max-w-[890px]" : ""
        }`}
      >
        {t("title")}
      </h1>
      <p className="mt-5 text-center text-lg text-gray-600 drop-shadow-sm max-w-[750px]">
        {t("subtitle.label")}{" "}
        <NavigationLink className="text-red-400" href="/moods">
          {t("subtitle.link")}
        </NavigationLink>
      </p>
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
