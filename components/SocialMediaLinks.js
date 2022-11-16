import Icon from './Icon';

import styles from './socialmedialinks.module.scss';

const SocialMediaLinks = () => {
    return <ul className={styles.socialMediaList}>
        <li className={styles.socialMediaListItem}><a className={styles.socialMediaLink} href="https://www.facebook.com/"><Icon icon="facebook" /></a></li>
        <li className={styles.socialMediaListItem}><a className={styles.socialMediaLink} href="https://www.instagram.com/"><Icon icon="instagram" /></a></li>
    </ul>
}
export default SocialMediaLinks;