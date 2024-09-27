import { createGoogleSearchLink } from "@/utils/GoogleSearch";
import Link from "next/link";

interface MovieCardProps {
  movieTitle: string;
  explanation: string;
  whereToWatch: string[];
}

const MovieCard = ({
  movieTitle,
  explanation,
  whereToWatch,
}: MovieCardProps) => {
  const googleSearchUrl = createGoogleSearchLink(movieTitle);
  return (
    <div className="border-2 p-4 rounded-md">
      <Link
        href={googleSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-red-400"
      >
        {movieTitle}
      </Link>
      <p>{explanation}</p>
      <ul className="list-disc list-inside mt-2">
        {whereToWatch.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCard;
