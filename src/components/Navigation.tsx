import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <section className={styles.list} role="list">
        <p role="listitem">
          <Link to="/">Home</Link>
        </p>
        <p role="listitem">
          <Link to="/about">About</Link>
        </p>
      </section>
    </nav>
  );
};

export default Navigation;
