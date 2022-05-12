import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from '../../service/fetchAPI';

const MoviesList = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const query = search.get('query');

  console.log('query is ', query);

  const [movies = [], setMovies] = useState();

  useEffect(() => {
    fetchMovies(query) //no args mean fetch trending list
      .then(data => setMovies(data.data.results))
      .catch(err => console.log(err))
      .finally(() => {
        //loader ends here
      });
  }, [query]);

  return (
    <ul>
      {movies.map(movie => {
        const { id, title } = movie;
        return <li key={id}>{<Link to={`/movies/${id}`}>{title}</Link>}</li>;
      })}
    </ul>
  );
};

export default MoviesList;
