"use client";
import { Moods } from "@/constans";
import useRecommendations from "@/hooks/useRecommendations";
import Image from "next/image";
import React, { useState } from "react";
import Loader from "./Loader";
import RecommendationsSection from "./RecommendationsSection";
import { useTranslations } from "next-intl";

const MoodSelector = () => {
  const [mood, setMood] = useState({ title: "", url: "", prompt: "", key: "" });
  const [showMoods, setShowMoods] = useState(true);
  const { setPrompt, isGot, loading, error, movies, fetchRecommendations, setMovies, setError } =
    useRecommendations();
  const t = useTranslations("ChoosePage");

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
            <button
              onClick={handlePickAnotherMood}
              className="text-white bg-red-400 font-medium rounded-md text-sm px-5 py-2 text-center inline-flex items-center gap-1 shadow-xl"
            >
              {t("pickAnotherMoodButton")}
            </button>
            <RecommendationsSection movies={movies} isGot={isGot} />
            <button
              onClick={handlePickAnotherMood}
              className="text-white bg-red-400 font-medium rounded-md text-sm px-5 py-2 text-center inline-flex items-center gap-1 shadow-xl"
            >
              {t("pickAnotherMoodButton")}
            </button>
          </>
        ) : (
          showMoods && (
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] bg-white/70 p-4 rounded-2xl shadow-xl border-2 border-[#faf7de] backdrop-blur-sm w-full max-w-[1260px]">
              {Moods &&
                Moods.map((item) => (
                  <button
                    type="button"
                    onClick={() => handleMood({ title: item.key, url: item.url, key: item.key })}
                    key={item.url}
                    className={`flex flex-col gap-1 justify-center items-center p-4 max-w-[270px] rounded-md cursor-pointer hover:bg-slate-500 text-gray-700 hover:text-white transition-all duration-100 ease-in-out drop-shadow-sm ${
                      mood.title === item.key ? "bg-red-400 text-white" : ""
                    }`}
                  >
                    {item.url && (
                      <Image
                        className="w-[50px] h-[50px]"
                        src={item.url}
                        width={50}
                        height={50}
                        alt={`${item.key} mood emoji`}
                      />
                    )}
                    <span>{t(`Moods.${item.key}.title`)}</span>
                  </button>
                ))}
            </div>
          )
        )}
        {showMoods && (
          <button
            disabled={loading}
            onClick={handleSubmit}
            type="submit"
            className="text-white bg-red-400 font-medium rounded-md text-sm px-5 py-2 text-center inline-flex items-center gap-1 shadow-xl"
          >
            <span className="block">{loading ? t("button.loading") : t("button.label")}</span>
            <Image
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Clapper%20Board.png"
              alt="loader"
              width={20}
              height={20}
            />
          </button>
        )}
        {error && (
          <div className="flex flex-col items-center">
            <button
              onClick={handlePickAnotherMood}
              className="text-white bg-red-400 font-medium rounded-md text-sm px-5 py-2 text-center inline-flex items-center gap-1 shadow-xl"
            >
              {t("pickAnotherMoodButton")}
            </button>
            <p className="text-red-500 mt-2">{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoodSelector;
