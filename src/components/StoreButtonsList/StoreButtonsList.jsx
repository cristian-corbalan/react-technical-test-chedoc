import styles from './StoreButtonsList.module.css';
import AppStoreImg from '../../assets/store/app-store.svg';
import PlayStoreImg from '../../assets/store/play-store.svg';
import WindowsStoreImg from '../../assets/store/windows-store.svg';

export default function StoreButtonsList () {
  return (
    <ul className={styles.storeButtonsList}>
      <li>
        <a href="#"><img src={AppStoreImg} alt="Go to App Store page" /></a>
      </li>
      <li>
        <a href="#"><img src={PlayStoreImg} alt="Go to Google Play Store page" /></a>
      </li>
      <li>
        <a href="#"><img src={WindowsStoreImg} alt="Go to Microsoft Store page" /></a>
      </li>
    </ul>
  );
}
