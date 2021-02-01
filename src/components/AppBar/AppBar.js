import NavHeader from '../NavHeader/NavHeader';
import styles from './AppBar.module.scss';

const AppBar = () => (
  <header className={styles.header}>
    <NavHeader />
  </header>
);

export default AppBar;
