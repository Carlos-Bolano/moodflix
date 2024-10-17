import { getPlatformLogo } from "@/utils/GetPlatformsLogo";
import { createGoogleSearchLink } from "@/utils/GoogleSearch";
import Image from "next/image";
import Link from "next/link";

export interface Movie {
  id: number;
  title: string;
  explanation: string;
  trailer: string;
  platforms: {
    name: string;
    link: string;
  }[];
  year: string;
  poster: string;
  rating: number;
  genres: string[];
}

const MovieCard = ({ title, explanation, platforms, poster, rating, year, genres }: Movie) => {
  const googleSearchUrl = createGoogleSearchLink(title);

  return (
    <article className="md:p-4 rounded-3xl bg-white/70 backdrop-blur-sm shadow-xl flex flex-col md:flex-row gap-3 md:gap-1 border-2 border-white">
      {poster && (
        <Image
          className="md:rounded-3xl rounded-t-3xl w-full md:w-full h-auto"
          src={poster}
          alt={title}
          width={200}
          height={100}
        />
      )}
      <div className="flex flex-col md:mt-4 px-4 pb-4">
        <Link
          href={googleSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl leading-8 text-slate-600 font-semibold hover:underline"
        >
          {title}
        </Link>

        <div className="flex flex-col mt-2 gap-2">
          <div className="flex flex-wrap gap-2 text-xs text-red-400 ">
            Genres:
            {genres && genres.length > 0 ? (
              genres.map((genre: string, index: number) => (
                <span key={index} className="text-xs text-slate-500">
                  {genre}
                </span>
              ))
            ) : (
              <span className="text-xs text-gray-500">No genres available</span>
            )}
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="block text-red-400 text-xs">
              Year: <span className="text-slate-600 font-bold">{year.split("-")[0]}</span>
            </span>
            <span className="block text-yellow-500 bg-[#faf7de] px-1 rounded-3xl text-sm font-semibold">
              {rating.toString().slice(0, 3)}⭐
            </span>
          </div>
        </div>

        <p className="text-slate-600 mt-2 text-[14.6px]">{explanation}</p>

        <div className="flex flex-wrap gap-2 items-center mt-2  ">
          {platforms.map((platform) => (
            <Image
              className="drop-shadow-lg"
              key={platform.name}
              src={getPlatformLogo(platform.name)}
              alt={getPlatformLogo(platform.name) ? platform.name : " "}
              width={70}
              height={70}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
