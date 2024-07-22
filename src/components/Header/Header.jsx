import styles from './Header.module.css';

export default function Header () {
  return (
    <header className={styles.mainHeader}>
      <h1>STREAMING DEMO</h1>
      <nav>
        <ul>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Series</a></li>
        </ul>
      </nav>
    </header>
  );
}
