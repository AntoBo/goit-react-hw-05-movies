import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import Err from 'components/Err/Err';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../../service/fetchAPI';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const query = search.get('query');

  // const movies = useData(() => fetchMoviesByQuery(query), []); DOESNT WORK YET

  const [movies = [], setMovies] = useState();

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    fetchMoviesByQuery(query)
      .then(data => setMovies(data))
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <>
      <SearchForm />
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
