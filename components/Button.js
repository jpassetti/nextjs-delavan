import classNames from 'classnames/bind';

import styles from './button.module.scss';
import Icon from './Icon';

let cx = classNames.bind(styles);

const Button = ({
    backgroundColor,
    fontColor,
    iconAfter, 
    label, 
    size,
    url, 
}) => {
    let buttonClasses = cx({
        btn: true,
        [`background-color-${backgroundColor}`]: backgroundColor,
        [`font-color-${fontColor}`]: fontColor,
        [`size-${size}`] : size
    });
    return <button className={buttonClasses}>
        {url ? <a href={url} target="_blank" rel="noopener noreferrer">{label ? label : ''} {iconAfter ? <Icon fill="blue" iconSlug={iconAfter} /> : ''}</a> : label}
    </button>
}
export default Button;