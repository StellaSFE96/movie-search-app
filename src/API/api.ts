import axios from 'axios';

const API_KEY = 'your_api_key';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = (query: string) => {
  return axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
};

export const fetchMovieDetails = (id: string) => {
  return axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });
};
