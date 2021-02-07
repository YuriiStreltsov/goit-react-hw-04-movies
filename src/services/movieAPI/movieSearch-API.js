import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = { api_key: '4edb548a0da264ed758bfc41cafe2bb5' };

function fetchMoviesCommon(url = '', config = {}) {
  try {
    const response = axios(url, config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function fetchMoviesTrending() {
  return fetchMoviesCommon('trending/all/day');
}

export function fetchMovieById(movieId) {
  return fetchMoviesCommon(`movie/${movieId}`);
}

export function fetchMovieOnSubmit(query) {
  return fetchMoviesCommon(`/search/movie?query=${query}`);
}

export function fetchMovieCastInfo(movieId) {
  return fetchMoviesCommon(`movie/${movieId}/credits`);
}

export function fetchMovieReviewsInfo(movieId) {
  return fetchMoviesCommon(`movie/${movieId}/reviews`);
}
