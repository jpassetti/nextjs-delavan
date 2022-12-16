import classNames from 'classnames/bind';
import Icon from './Icon';

import styles from './buttonui.module.scss';

let cx = classNames.bind(styles);

const ButtonUI = ({ icon, clickHandler, active, color }) => {
    let buttonClasses = cx({
        buttonui: true,
        active: active,
    });
    return <button className={buttonClasses} onClick={clickHandler}>
        <Icon color={color} icon={icon} active={active ? 'active' : 'inactive'} />
    </button>
}
export default ButtonUI;