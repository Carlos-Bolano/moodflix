import Image from "next/image";

import React from "react";

interface Movie {
  title: string;
  explanation: string;
  poster: string;
}
const WantedUser = ({ title, explanation, poster }: Movie) => {
  return (
    <article className="md:p-4 rounded-3xl bg-white/70 backdrop-blur-sm shadow-xl grid md:grid-cols-[0.5fr,1fr] max-w-[800px] md:gap-1 gap-4 border-2 border-white">
      <Image
        className="md:rounded-3xl rounded-t-3xl w-full min-w-44 object-cover  h-full place-self-center"
        src={poster}
        alt="Movie Poster"
        width={600}
        height={600}
      />

      <div className="flex flex-col md:mt-4 px-4 pb-4">
        <h3 className="text-2xl leading-8 text-slate-600 font-semibold">{title}</h3>
        <p className="text-slate-600 mt-2 text-[14.6px]">{explanation}</p>
      </div>
    </article>
  );
};

export default WantedUser;
