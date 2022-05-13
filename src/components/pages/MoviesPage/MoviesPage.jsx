import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../../service/fetchAPI';

const MoviesPage = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const query = search.get('query');

  const [movies = [], setMovies] = useState();

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesByQuery(query) //no args mean fetch trending list
      .then(data => setMovies(data.data.results))
      .catch(err => console.log(err))
      .finally(() => {});
  }, [query]);
  return (
    <>
      <SearchForm />
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesPage;
