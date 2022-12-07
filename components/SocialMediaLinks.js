import classNames from 'classnames/bind';
import { getSocialMediaLinks } from '../lib/api';
import Icon from './Icon';

import styles from './socialmedialinks.module.scss';
let cx = classNames.bind(styles);

const SocialMediaLinks = ({links, color}) => {
    let socialMediaLinkClasses = cx({
        'socialMediaLink': true,
        [`fill-${color}`]: color,
    });
    return links ? <ul className={styles.socialMediaList}>
        {links.map((link, index) => {
            const {name, url} = link;
            return name !== "website" ? <li key={index} className={styles.socialMediaListItem}><a className={socialMediaLinkClasses} href={url}><Icon icon={name} /></a></li> : '';
        })}
    </ul>  : ''  
}
export default SocialMediaLinks;