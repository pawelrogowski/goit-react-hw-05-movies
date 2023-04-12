import axios from 'axios';

const API_KEY = '7eb4144f23574cb706a8e231476e9049';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

//api endpoints
export const getTrendingMovies = () => api.get('/trending/movie/day');
export const searchMovies = query => api.get('/search/movie', { params: { query } });
export const getMovieDetails = movieId => api.get(`/movie/${movieId}`);
export const getMovieCredits = movieId => api.get(`/movie/${movieId}/credits`);
export const getMovieReviews = movieId => api.get(`/movie/${movieId}/reviews`);
export default api;
