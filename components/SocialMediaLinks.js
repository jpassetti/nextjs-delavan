import classNames from 'classnames/bind';
import { getSocialMediaLinks } from '../lib/api';
import Icon from './Icon';

import styles from './socialmedialinks.module.scss';
let cx = classNames.bind(styles);

const SocialMediaLinks = ({links, color, justifyContent}) => {
    let socialMediaListClasses = cx({
        'socialMediaList': true,
        [`justify-content-${justifyContent}`]: justifyContent
    });
    let socialMediaLinkClasses = cx({
        'socialMediaLink': true,
        [`fill-${color}`]: color
    });
    let theLinks = links ? links : getSocialMediaLinks();
    return theLinks ? <ul className={socialMediaListClasses}>
        {theLinks.map((link, index) => {
            const {name, url} = link;
            return name !== "website" ? <li key={index} className={styles.socialMediaListItem}><a className={socialMediaLinkClasses} href={url} target="_blank"><Icon iconSlug={name} /></a></li> : '';
        })}
    </ul>  : ''  
}
export default SocialMediaLinks;