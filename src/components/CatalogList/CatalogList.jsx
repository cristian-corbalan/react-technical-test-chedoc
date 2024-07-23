import CatalogListItem from '../CatalogListItem/CatalogListItem.jsx';
import styles from './CatalogList.module.css';

export default function CatalogList ({ catalog, onShowModal }) {
  return (
    <ul className={styles.catalogList}>
      {catalog.map(item => (
        <CatalogListItem onShowModal={onShowModal} key={item.title} item={item}/>
      ))}
    </ul>
  );
}
