import { Link } from 'react-router-dom';

const InfoLinks = () => {
  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <Link to="/">Cast</Link>
        <Link to="/">Reviews</Link>
      </ul>
    </>
  );
};

export default InfoLinks;
