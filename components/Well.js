import styles from './well.module.scss';

const Well = ({ children }) => {
    return (
        <div className={styles.well}>
        {children}
        </div>
    );
}
export default Well;