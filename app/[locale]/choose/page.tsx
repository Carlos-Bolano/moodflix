import EmojiRain from "@/components/EmojiRain";
import MoodSelector from "@/components/MoodSelector";
import NavigationLink from "@/components/NavigationLink";
import { useTranslations } from "next-intl";
import React from "react";

const ChoosePage = () => {
  const t = useTranslations("ChoosePage");
  return (
    <section className="flex flex-col items-center py-10 relative z-10 ">
      <div>
        <h1 className="font-semibold mt-5 text-center text-3xl sm:text-4xl md:text-5xl text-gray-600 drop-shadow-sm max-w-[750px]">
          {t("title")}
        </h1>
        <p className="mt-5 text-center text-lg text-gray-600 drop-shadow-sm max-w-[750px]">
          {t("subtitle.label")}{" "}
          <NavigationLink className="text-red-400" href="/">
            {t("subtitle.link")}
          </NavigationLink>
        </p>
      </div>
      <MoodSelector />
    </section>
  );
};

export default ChoosePage;
