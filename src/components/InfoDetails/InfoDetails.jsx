import { Link, useLocation } from 'react-router-dom';

const InfoDetails = () => {
  const location = useLocation();
  return (
    <div className="movie-infolinks-wrapper">
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default InfoDetails;
