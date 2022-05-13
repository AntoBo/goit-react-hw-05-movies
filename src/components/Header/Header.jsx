import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          to="/"
        >
          {/* <NavLink style={{ color: 'red' }} to="/"> */}
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
