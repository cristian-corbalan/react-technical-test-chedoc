import { useDispatch } from 'react-redux';
import placeholderImg from '../../assets/placeholder.png';
import { uiActions } from '../../store/slices/uiSlice.js';
import styles from './Home.module.css';

export default function Home () {
  const dispatch = useDispatch();

  return (
    <main>
      <h1 className={styles.homeTitle}>Popular titles</h1>

      <div className={styles.homeContent}>
        <a href="#" title="Go to series catalog" onClick={() => dispatch(uiActions.changeSection('series'))}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src={placeholderImg} alt="Series" />
            </div>
            <span className={styles.cardTitle}>Popular series</span>
          </div>
        </a>

        <a href="#" title="Go to movies catalog" onClick={() => dispatch(uiActions.changeSection('movies'))}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src={placeholderImg} alt="Movies" />
            </div>
            <span className={styles.cardTitle}>Popular movies</span>
          </div>
        </a>
      </div>
    </main>
  );
}
