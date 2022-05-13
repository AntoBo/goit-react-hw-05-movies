import MoviesList from 'components/MoviesList/MoviesList';
import { useData } from 'hooks/useData';
// import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from '../../../service/fetchAPI';

const HomePage = () => {
  // const location = useLocation();
  const movies = useData(fetchTrendingMovies, []);
  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
