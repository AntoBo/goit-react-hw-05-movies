import { Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../../service/fetchAPI';

import MovieCard from 'components/MovieCard/MovieCard';
import GoBackBtn from '../../utils/GoBackBtn';
import InfoDetails from 'components/InfoDetails/InfoDetails';
import { useData } from 'hooks/useData';
import Loader from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const location = useLocation();

  const goBackPath = location.state.pathname + location.state.search;
  const [movie, isLoading] = useData(fetchMovieById);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <GoBackBtn goBackPath={goBackPath} />
          {movie && <MovieCard movie={movie} />}
          <InfoDetails />
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
