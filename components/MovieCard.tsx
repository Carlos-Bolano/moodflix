interface MovieCardProps {
  movieTitle: string;
  explanation: string;
  whereToWatch: string[];
}

const MovieCard: React.FC<MovieCardProps> = ({
  movieTitle,
  explanation,
  whereToWatch,
}) => (
  <div className="border-2 p-4 rounded-md">
    <h1 className="text-2xl text-red-500">{movieTitle}</h1>
    <p>{explanation}</p>
    <ul className="list-disc list-inside mt-2">
      {whereToWatch.map((service) => (
        <li key={service}>{service}</li>
      ))}
    </ul>
  </div>
);

export default MovieCard;
