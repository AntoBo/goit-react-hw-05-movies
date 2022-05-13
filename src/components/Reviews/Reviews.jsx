import Loader from 'components/Loader/Loader';
import { useData } from 'hooks/useData';
import { fetchMovieReviews } from '../../service/fetchAPI';

const Reviews = () => {
  const [reviews, isLoading] = useData(fetchMovieReviews, []);
  if (!reviews) {
    return;
  }
  return (
    <>
      <h3>Reviews</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {reviews.map(review => {
            const { author, content, id } = review;
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
