import { useData } from 'hooks/useData';
import { fetchMovieReviews } from '../../service/fetchAPI';

const Reviews = () => {
  const reviews = useData(fetchMovieReviews, []);
  if (!reviews) {
    return;
  }

  // const { author, content, id } = review;
  return (
    <>
      <h3>Reviews</h3>
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
    </>
  );
};

export default Reviews;
