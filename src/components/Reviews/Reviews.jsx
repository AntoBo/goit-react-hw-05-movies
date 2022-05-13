import Loader from 'components/Loader/Loader';
import { useData } from 'hooks/useData';
import { fetchMovieReviews } from '../../service/fetchAPI';
import s from './Reviews.module.scss';

const Reviews = () => {
  const [reviews, isLoading] = useData(fetchMovieReviews, []);
  if (!reviews) {
    return;
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {reviews.map(review => {
            const { author, content, id } = review;
            return (
              <li className={s.item} key={id}>
                <p className={s.autor}>{author}</p>
                <p className={s.review}>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
