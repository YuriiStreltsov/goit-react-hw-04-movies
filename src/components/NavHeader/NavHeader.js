import { NavLink } from 'react-router-dom';
import './NavHeader.scss';
import routes from '../../routes';

const NavHeader = () => (
  <nav className="navigation">
    <NavLink
      exact
      to={routes.home}
      className="link-home"
      activeClassName="activeLink"
    >
      Home
    </NavLink>

    <NavLink
      to={routes.movies}
      className="link-movies"
      activeClassName="activeLink"
    >
      Movies
    </NavLink>
  </nav>
);

export default NavHeader;
