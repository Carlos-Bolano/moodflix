import { Genre, GENRES } from "@/constans";

export const getMovieDetails = async (movieTitle: string) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=es-Es&page=1`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const details = await data.results[0];

  const genreNames = details.genre_ids.reduce((acc: string[], id: number) => {
    const genre = GENRES.find((genre) => genre.id === id);
    if (genre) {
      acc.push(genre.name);
    }
    return acc;
  }, []);

  const movie = {
    movieId: details.id,
    backdroPath: `https://image.tmdb.org/t/p/w500/${details.backdrop_path}`,
    posterPath: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
    title: details.title,
    vote_average: details.vote_average,
    release_date: details.release_date,
    genres: genreNames,
  };
  return movie;
};
// TODO: SET language=es-Es IN THE QUERY TO MAKE THE REQUEST
