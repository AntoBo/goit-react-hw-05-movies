import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../../service/fetchAPI';

import MovieCard from 'components/MovieCard/MovieCard';
import GoBackBtn from '../../utils/GoBackBtn';
import InfoDetails from 'components/InfoDetails/InfoDetails';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState();
  const location = useLocation();
  const movieId = location.pathname.match(/[0-9]+/)[0];
  console.log('movieId is', movieId);

  useEffect(() => {
    fetchMovieById(movieId)
      .then(data => setMovie(data.data))
      .catch(err => console.log(err))
      .finally(() => {});
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <GoBackBtn />
      <MovieCard movie={movie} />
      <InfoDetails />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
