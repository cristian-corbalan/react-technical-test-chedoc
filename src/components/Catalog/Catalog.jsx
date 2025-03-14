import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import CatalogList from '../CatalogList/CatalogList.jsx';
import ItemDetails from '../ItemDetails/ItemDetails.jsx';
import styles from './Catalog.module.css';

export default function Catalog () {
  const [catalog, setCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const modal = useRef();
  const section = useSelector(state => state.ui.section);
  const title = section === 'movies' ? 'Popular movies' : 'Popular series';

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:5174/data/sample.json');

      if (!response.ok) {
        console.warn('Could not fetch the movies/series');
        setIsLoading(false);
      }

      const data = await response.json();

      let catalog = [];

      if (section === 'series') {
        catalog = data.entries.filter(entrie => entrie.programType === 'series' && entrie.releaseYear >= 2010);
      } else {
        catalog = data.entries.filter(entrie => entrie.programType === 'movie' && entrie.releaseYear >= 2010);
      }

      catalog = catalog.slice(0, 19);

      // Sort by title
      catalog.sort((a, b) =>
        a.title > b.title
          ? 1
          : a.title < b.title
            ? -1
            : 0
      );

      setCatalog(catalog);

      setIsLoading(false);
    })();
  }, [section, setCatalog]);

  function handleShowModal () {
    modal.current.showModal();
  }

  return (
    <main>
      <h1 className={styles.catalogTitle}>{title}</h1>

      {isLoading && <p>Fetching {section}...</p>}
      {!isLoading && <CatalogList onShowModal={handleShowModal} catalog={catalog}/>}

      <ItemDetails ref={modal}/>
    </main>
  );
}
