import Icon from './Icon';

import styles from './buttonui.module.scss';

const ButtonUI = ({ icon, clickHandler, active }) => {
    return <button className={styles.buttonui} onClick={clickHandler}>
        <Icon icon={icon} active={active ? active : false} />
    </button>
}
export default ButtonUI;