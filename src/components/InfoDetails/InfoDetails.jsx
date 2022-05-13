import { NavLink, useLocation } from 'react-router-dom';
import s from './InfoDetails.module.scss';

const InfoDetails = () => {
  const location = useLocation();
  return (
    <div className={s.wrap}>
      <ul>
        <li>
          <NavLink
            to="cast"
            state={location.state}
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            state={location.state}
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default InfoDetails;
