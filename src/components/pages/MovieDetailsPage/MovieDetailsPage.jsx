import { Outlet } from 'react-router-dom';
import { fetchMovieById } from '../../../service/fetchAPI';

import MovieCard from 'components/MovieCard/MovieCard';
import GoBackBtn from '../../utils/GoBackBtn';
import InfoDetails from 'components/InfoDetails/InfoDetails';
import { useData } from 'hooks/useData';

const MovieDetailsPage = () => {
  const movie = useData(fetchMovieById);
  return (
    <>
      <GoBackBtn />
      {movie && <MovieCard movie={movie} />}
      <InfoDetails />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
