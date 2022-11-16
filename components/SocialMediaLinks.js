import classNames from 'classnames/bind';
import { getSocialMediaLinks } from '../lib/api';
import Icon from './Icon';

import styles from './socialmedialinks.module.scss';
let cx = classNames.bind(styles);

const SocialMediaLinks = ({links, color}) => {
    const socialLinks = links ? links : getSocialMediaLinks();

    let socialMediaLinkClasses = cx({
        'socialMediaLink': true,
        [`fill-${color}`]: color,
    });
    return <ul className={styles.socialMediaList}>
        {socialLinks.map((link, index) => {
            const { url, icon } = link;
            return <li key={index} className={styles.socialMediaListItem}><a className={socialMediaLinkClasses} href={url}><Icon icon={icon} /></a></li>
        })}
    </ul>    
}
export default SocialMediaLinks;