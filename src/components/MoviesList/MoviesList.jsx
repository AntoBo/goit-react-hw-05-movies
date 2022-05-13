// import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { fetchMovies } from '../../service/fetchAPI';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <ul>
      {movies.map(movie => {
        const { id, title } = movie;
        return (
          <li key={id}>
            {
              <Link to={`/movies/${id}`} state={location}>
                {title}
              </Link>
            }
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
