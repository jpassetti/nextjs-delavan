import classNames from 'classnames/bind';
import Icon from './Icon';

import styles from './buttonui.module.scss';

let cx = classNames.bind(styles);

const ButtonUI = ({ iconSlug, clickHandler, active, color, type }) => {
    let buttonClasses = cx({
        buttonui: true,
        active: active,
    });
    return <button className={buttonClasses} onClick={clickHandler} type={type ? type : null}>
        <Icon color={color} iconSlug={iconSlug} isActive={active ? true : false} />
    </button>
}
export default ButtonUI;