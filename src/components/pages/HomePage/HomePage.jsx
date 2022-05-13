import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useData } from 'hooks/useData';
import { fetchTrendingMovies } from '../../../service/fetchAPI';

const HomePage = () => {
  const [movies, isLoading] = useData(fetchTrendingMovies, []);
  return (
    <>
      <h1>Trending today</h1>
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
