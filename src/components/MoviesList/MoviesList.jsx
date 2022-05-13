import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.scss';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {
        // movies.lenght > 0 &&
        movies.map(movie => {
          const { id, title } = movie;
          return (
            <li className={s.item} key={id}>
              {
                <Link to={`/movies/${id}`} state={location}>
                  {title}
                </Link>
              }
            </li>
          );
        })
      }
    </ul>
  );
};

export default MoviesList;
