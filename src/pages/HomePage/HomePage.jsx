import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useData } from 'hooks/useData';
import { fetchTrendingMovies } from '../../service/fetchAPI';
import s from './HomePage.module.scss';

const HomePage = () => {
  const [movies, isLoading] = useData(fetchTrendingMovies, []);
  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
