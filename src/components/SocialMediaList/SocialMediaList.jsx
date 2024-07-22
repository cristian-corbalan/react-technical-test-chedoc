import styles from './SocialMediaList.module.css';
import FacebookWhiteIcon from '../../assets/social/facebook-white.svg';
import InstagramWhiteIcon from '../../assets/social/instagram-white.svg';
import TwitterWhiteIcon from '../../assets/social/twitter-white.svg';

export default function SocialMediaList () {
  return (
    <ul className={styles.socialMediaList}>
      <li><a href="#"><img src={FacebookWhiteIcon} alt="Go to Facebook" /></a></li>
      <li><a href="#"><img src={InstagramWhiteIcon} alt="Go to Instagram" /></a></li>
      <li><a href="#"><img src={TwitterWhiteIcon} alt="Go to Twitter" /></a></li>
    </ul>
  );
}
