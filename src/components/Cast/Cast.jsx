import { useData } from 'hooks/useData';
import { fetchMovieCast, BASE_IMG_URL } from '../../service/fetchAPI';

const Cast = () => {
  const castList = useData(fetchMovieCast);
  if (!castList) {
    return;
  }
  return (
    <>
      <h3>Cast</h3>
      <ul>
        {castList.map(cast => {
          const { name, character, profile_path, id } = cast;
          return (
            <li key={id} className="cast">
              {profile_path && (
                <img
                  width="100"
                  src={BASE_IMG_URL + profile_path}
                  alt={name}
                ></img>
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
