import styles from './CatalogListItem.module.css';

export default function CatalogListItem ({ item }) {
  const imageSrc = item.images['Poster Art'].url;
  return (
    <li className={styles.item}>
      <a href="#" className={styles.link}>
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
