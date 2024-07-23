import CatalogListItem from '../CatalogListItem/CatalogListItem.jsx';
import styles from './CatalogList.module.css';

export default function CatalogList ({ catalog }) {
  return (
    <ul className={styles.catalogList}>
      {catalog.map(item => (
        <CatalogListItem key={item.title} item={item}/>
      ))}
    </ul>
  );
}
