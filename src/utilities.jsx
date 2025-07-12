import axios from "axios";
import genreFilms from "./fake_data.json";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TBD_KEY}`, // Register for API key at https://www.themoviedb.org/settings/api
  },
});

export const TBDAuthentication = async () => {
  `
    This call will test your ability to authenticate with the TBD API
    https://developer.themoviedb.org/reference/intro/authentication
    `;
  const { data } = await api.get("authentication");
  console.log(data.success);
};

export const getGenres = async () => {
  const { data } = await api.get("genre/movie/list?language=en");
  return data.genres;
};

export const getFilmsForGenre = async (genreId, pageNum = 1) => {
  `
  This function will grab a list of objects where each object will represent a movie matching the genre id that was passed in. It can also deal with pagination and the page is defaulted to 1
  https://developer.themoviedb.org/reference/discover-movie
  `
  const { data } = await api.get(
    `discover/movie?include_adult=true&include_video=true&language=en-US&page=${pageNum}&sort_by=popularity.desc&with_genres=${genreId}`
  );
  return data.results;
};

export const getMovieDetails = async(movieId) =>{
    `
    This function will send a request to the TMDB api to grab all details pertaining
    a movie matching the movieId parameter
    https://developer.themoviedb.org/reference/movie-details
    `
    const { data } = await api.get(`movie/${movieId}`)
    return data
}

export const getHomeGenreFilms = async () => {
  let genres = await getGenres();
  let genreAndFilms = await Promise.all(
    genres.map(async (genre) => ({
      ...genre,
      films: await getFilmsForGenre(genre.id),
    }))
  );
  return genreAndFilms;
};
