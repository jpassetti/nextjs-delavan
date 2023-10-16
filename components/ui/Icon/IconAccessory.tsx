import React from 'react';
import classNames from 'classnames/bind'

import Icon from '../Icon';

import styles from './icon.module.scss';

let cx = classNames.bind(styles);

interface IconAccessoryProps {
    iconPath?: {
        sourceUrl?: string;
        altText?: string;
    }
    iconSlug?: string;
}

const IconAccessory: React.FC<IconAccessoryProps> = ({
iconPath, iconSlug
}) => {
    let iconAccessoryClasses = cx({
        iconAccessory: true,
        [`background-color-${iconSlug}`] : iconSlug
    });
    return <div className={iconAccessoryClasses}>
        <Icon iconPath={iconPath ? iconPath : null} iconSlug={iconSlug} iconColor="black"  />
     </div>
}
export default IconAccessory;