import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../../service/fetchAPI';

const HomePage = () => {
  const [movies = [], setMovies] = useState();

  useEffect(() => {
    fetchTrendingMovies() //no args mean fetch trending list
      .then(data => setMovies(data))
      .catch(err => console.log(err))
      .finally(() => {
        //loader ends here
      });
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
