import Loader from 'components/Loader/Loader';
import { useData, Status } from 'hooks/useData';
import { fetchMovieCast, BASE_IMG_URL } from '../../service/fetchAPI';
import s from './Cast.module.scss';

const Cast = () => {
  const [castList, isLoading] = useData(fetchMovieCast);
  if (!castList) {
    return;
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {castList.map(cast => {
            const { name, character, profile_path, id } = cast;
            return (
              <li key={id} className={s.item}>
                {profile_path && (
                  <img
                    className={s.picture}
                    width="100"
                    src={BASE_IMG_URL + profile_path}
                    alt={name}
                  ></img>
                )}
                <p className={s.actor}>{name}</p>
                <p className={s.char}>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
