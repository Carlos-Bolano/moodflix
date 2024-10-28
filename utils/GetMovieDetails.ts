import { Genre, GENRES } from "@/constans";

export const getMovieDetails = async (movieTitle: string) => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-En&page=1`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      console.error("No se encontraron películas para el título proporcionado.");
      return null;
    }

    const details = data.results[0];

    if (!details.genre_ids) {
      console.error("genre_ids no está definido en los detalles de la película.");
      return null;
    }

    const genreNames = details.genre_ids.reduce((acc: string[], id: number) => {
      const genre = GENRES.find((genre) => genre.id === id);
      if (genre) {
        acc.push(genre.name);
      }
      return acc;
    }, []);

    const movie = {
      movieId: details.id,
      posterPath: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
      title: details.title,
      vote_average: details.vote_average,
      release_date: details.release_date,
      genres: genreNames,
    };
    return movie;
  } catch (error) {
    console.error("Error al obtener los detalles de la película:", error);
    return null; // Manejo del error según tu lógica
  }
};
// TODO: SET language=es-Es IN THE QUERY TO MAKE THE REQUEST
