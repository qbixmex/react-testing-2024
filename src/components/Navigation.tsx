import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <section className={styles.list} role="list">
        <div role="listitem">
          <Link to="/">Home</Link>
        </div>
        <div role="listitem">
          <Link to="/about">About</Link>
        </div>
        <div role="listitem">
          <Link to="/login">Login</Link>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
