import styles from './menuoverlay.module.scss';

const MenuOverlay = ({closeHandler}) => {
    return <div className={styles.menuoverlay}>
        <button onClick={closeHandler}>Close</button>
        Overlay
    </div>
}
export default MenuOverlay