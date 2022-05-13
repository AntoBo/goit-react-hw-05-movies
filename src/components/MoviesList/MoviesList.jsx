import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {
        // movies.lenght > 0 &&
        movies.map(movie => {
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
        })
      }
    </ul>
  );
};

export default MoviesList;
