import { useDispatch } from 'react-redux';
import styles from './CatalogListItem.module.css';
import { uiActions } from '../../store/slices/uiSlice.js';

export default function CatalogListItem ({ item, onShowModal }) {
  const dispatch = useDispatch();
  const imageSrc = item.images['Poster Art'].url;

  function handleShowDetails () {
    dispatch(uiActions.showDetails(item));
    onShowModal();
  }
  return (
    <li className={styles.item}>
      <a href="#" className={styles.link} onClick={handleShowDetails}>
        <div className={styles.imgContainer}>
          <img src={imageSrc} alt={item.title} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.description}>{item.releaseYear}</p>
        </div>
      </a>
    </li>
  );
}
