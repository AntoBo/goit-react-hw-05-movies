import axios from 'axios';

const API_KEY = '313da384ffe4ec90efea6fc8b4aa73ee';
const BASE_URL = {
  MOVIE: 'https://api.themoviedb.org/3/movie/',
  TERNDING: 'https://api.themoviedb.org/3/trending/movie/day',
  SEARCH: 'https://api.themoviedb.org/3/search/movie',
  GENRES: 'https://api.themoviedb.org/3/genre/movie/list',
};

export const fetchMoviesByQuery = async query => {
  console.log('fetchMoviesByQuery');
  try {
    const response = await axios.get(BASE_URL.SEARCH, {
      params: {
        api_key: API_KEY,
        page: 1,
        query,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrendingMovies = async () => {
  console.log('fetchTrendingMovies');
  try {
    const response = await axios.get(BASE_URL.TERNDING, {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieById = async id => {
  console.log('fetchMovieById');
  try {
    const response = await axios.get(BASE_URL.MOVIE + id, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
// export const fetchGenres = async () => {
//   try {
//     const response = await axios.get(BASE_URL.GENRES, {
//       params: {
//         api_key: API_KEY,
//       },
//     });
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
