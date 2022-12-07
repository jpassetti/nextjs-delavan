import classNames from 'classnames/bind';

import styles from './button.module.scss';
import Icon from './Icon';

let cx = classNames.bind(styles);

const Button = ({label, url, iconAfter, backgroundColor}) => {
    let buttonClasses = cx({
        btn: true,
        [`background-color-${backgroundColor}`]: backgroundColor,
    });
    return <button className={buttonClasses}>
        {url ? <a href={url} target="_blank" rel="noopener noreferrer">{label ? label : ''} {iconAfter ? <Icon fill="blue" icon={iconAfter} /> : ''}</a> : label}
    </button>
}
export default Button;