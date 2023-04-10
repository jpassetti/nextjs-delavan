import classNames from 'classnames/bind';
import Icon from './Icon';

import styles from './buttonui.module.scss';

let cx = classNames.bind(styles);

const ButtonUI = ({ iconSlug, clickHandler, active, iconColor, type }) => {
    let buttonClasses = cx({
        buttonui: true,
        active: active,
        close: iconSlug === "close",
    });
    return <button className={buttonClasses} onClick={clickHandler} type={type ? type : null}>
        <Icon iconColor={iconColor} iconSlug={iconSlug} isActive={active ? true : false} />
    </button>
}
export default ButtonUI;