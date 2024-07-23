import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/slices/uiSlice.js';
import styles from './Header.module.css';

export default function Header () {
  const dispatch = useDispatch();
  return (
    <header className={styles.mainHeader}>
      <h1>STREAMING DEMO</h1>
      <nav>
        <ul>
          <li><a href="#" onClick={() => dispatch(uiActions.changeSection('movies'))}>Movies</a></li>
          <li><a href="#" onClick={() => dispatch(uiActions.changeSection('series'))}>Series</a></li>
        </ul>
      </nav>
    </header>
  );
}
