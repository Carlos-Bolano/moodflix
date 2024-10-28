import EmojiRain from "@/components/EmojiRain";
import MoodSelector from "@/components/MoodSelector";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col items-center py-10 relative z-10 ">
      <div>
        <h1 className="font-semibold mt-5 text-center text-3xl sm:text-4xl md:text-5xl text-gray-600 drop-shadow-sm max-w-[750px]">
          Pick your mood and I&apos;ll tell you what movie to watch
        </h1>
        <p className="mt-5 text-center text-lg text-gray-600 drop-shadow-sm max-w-[750px]">
          don&apos;t want to pick how you feel?, then{" "}
          <Link className="text-red-400" href="/">
            write down your mood.
          </Link>
        </p>
      </div>
      <EmojiRain />
      <MoodSelector />
    </section>
  );
};

export default page;
