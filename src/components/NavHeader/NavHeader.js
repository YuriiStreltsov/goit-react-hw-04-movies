import { NavLink } from 'react-router-dom';
import styles from './NavHeader.module.scss';
import routes from '../../routes';
const NavHeader = () => (
  <nav>
    <NavLink
      exact
      to={routes.home}
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to={routes.movies}
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Movies
    </NavLink>
  </nav>
);

export default NavHeader;
