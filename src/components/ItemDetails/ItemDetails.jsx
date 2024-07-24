import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal.jsx';
import styles from './ItemDetails.module.css';

const ItemDetails = forwardRef(function ItemDetails (props, ref) {
  const itemDetails = useSelector(state => state.ui.details);

  return (
    <Modal ref={ref}>
      {itemDetails && (
        <>
          <div className={styles.imgContainer}>
            <img src={itemDetails.images['Poster Art'].url} alt={itemDetails.title} />
          </div>
          <div>
            <h1 className={styles.title}>{itemDetails.title}</h1>
            <p className={styles.date}>{itemDetails.releaseYear}</p>
            <p className={styles.description}>{itemDetails.description}</p>
          </div>
        </>
      )}
    </Modal>
  );
});

export default ItemDetails;
