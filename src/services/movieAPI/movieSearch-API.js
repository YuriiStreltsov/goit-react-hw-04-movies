import axios from 'axios';

// const API_KEY = '4edb548a0da264ed758bfc41cafe2bb5';
// const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: '4edb548a0da264ed758bfc41cafe2bb5' };

async function fetchMoviesCommon(url = '', config = {}) {
  try {
    const response = await axios(url, config);
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export function fetchMoviesTrending() {
  return fetchMoviesCommon('trending/all/day');
}
