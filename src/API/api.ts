import axios from 'axios';
import { MoviesResponse } from '../types/movieTypes';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch search results for movies
export const fetchMovies = (query: string) => {
  return axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
};

// Fetch popular movies
export const fetchPopularMovies = () => {
  return axios.get<MoviesResponse>(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
    },
  });
};

// Fetch upcoming movies
export const fetchUpcomingMovies = () => {
  return axios.get<MoviesResponse>(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
    },
  });
};

// Fetch trending movies (often used as featured)
export const fetchFeaturedMovies = () => {
  return axios.get<MoviesResponse>(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });
};

