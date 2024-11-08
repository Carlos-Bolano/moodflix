"use client";
import { Moods } from "@/constans";
import useRecommendations from "@/hooks/useRecommendations";
import React, { useState } from "react";
import Loader from "./Loader";
import RecommendationsSection from "./RecommendationsSection";
import { useTranslations } from "next-intl";
import Mood from "./Mood";
import { Button } from "./Button";
import Clown from "@/icons/Clown";
import Clapper from "@/icons/Clapper";

const MoodSelector = () => {
  const [mood, setMood] = useState({ title: "", url: "", prompt: "", key: "" });
  const [showMoods, setShowMoods] = useState(true);
  const { setPrompt, isGot, loading, error, movies, fetchRecommendations, setMovies, setError } =
    useRecommendations();
  const t = useTranslations("MoodsPage");

  const handleMood = (mood: { title: string; url: string; key: string }) => {
    const extractedPrompt = t("Moods." + mood.key + ".prompt");
    setMood({ title: mood.title, url: mood.url, prompt: extractedPrompt, key: mood.title });
  };

  const handleSubmit = () => {
    if (mood.prompt.length > 0) {
      setPrompt(mood.prompt);
      fetchRecommendations(mood.prompt);
      setShowMoods(false);
    }
  };

  const handlePickAnotherMood = () => {
    setError(null);
    setMovies([]);
    setMood({ title: "", url: "", prompt: "", key: "" });
    setShowMoods(true);
  };

  return (
    <section className="my-10 w-full flex flex-col items-center gap-10 justify-center">
      <div className="w-full flex flex-col items-center gap-10 justify-center">
        {loading && !error ? (
          <Loader />
        ) : isGot && movies.length > 0 && !loading ? (
          <>
            <Button onClick={handlePickAnotherMood}>
              {t("pickAnotherMoodButton")} <Clown />
            </Button>
            <RecommendationsSection movies={movies} isGot={isGot} />
            <Button onClick={handlePickAnotherMood}>
              {t("pickAnotherMoodButton")} <Clown />
            </Button>
          </>
        ) : (
          showMoods && (
            <>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] bg-white/70 p-4 rounded-2xl shadow-xl border-2 border-[#faf7de] backdrop-blur-sm w-full max-w-[1260px]">
                {Moods &&
                  Moods.map((item) => (
                    <Mood item={item} key={item.url} mood={mood} handleMood={handleMood} />
                  ))}
              </div>
              <Button disabled={loading} type="submit" onClick={handleSubmit}>
                <span className="block">{loading ? t("button.loading") : t("button.label")}</span>
                <Clapper />
              </Button>
            </>
          )
        )}

        {error && (
          <div className="flex flex-col items-center">
            <Button onClick={handlePickAnotherMood}>
              {t("pickAnotherMoodButton")} <Clown />
            </Button>
            <p className="text-red-500 mt-2">{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoodSelector;
