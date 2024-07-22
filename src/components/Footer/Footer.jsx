import SocialMediaList from '../SocialMediaList/SocialMediaList.jsx';
import StoreButtonsList from '../StoreButtonsList/StoreButtonsList.jsx';
import styles from './Footer.module.css';

export default function Footer () {
  return (
    <footer className={styles.mainFooter}>
      <ul className={styles.mainFooterNav}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Collection Statement</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Manage Account</a></li>
      </ul>
      <p>Copyright &copy; DEMO Streaming. All Rights Reserved.</p>

      <div>
        <SocialMediaList/>

        <StoreButtonsList/>
      </div>
    </footer>
  );
}
