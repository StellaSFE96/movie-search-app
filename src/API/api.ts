import axios from 'axios';
import { MoviesResponse } from '../types/movieTypes';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = (query: string) => {
  return axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
};

// import axios, { AxiosResponse } from 'axios';
// import { MoviesResponse, MovieDetails } from '../types/movieTypes';

// const API_KEY = process.env.REACT_APP_API_KEY;
// const BASE_URL = 'https://api.themoviedb.org/3';

// export const fetchMovies = (query: string): Promise<AxiosResponse<MoviesResponse>> => {
//   return axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
//     params: {
//       api_key: API_KEY,
//       query,
//     },
//   });
// };

// export const fetchMovieDetails = (id: string): Promise<AxiosResponse<MovieDetails>> => {
//   return axios.get<MovieDetails>(`${BASE_URL}/movie/${id}`, {
//     params: { api_key: API_KEY },
//   });
// };