import styles from './aside.module.scss';

const Aside = ({ children }) => {
    return <aside className={styles.aside}>{children}</aside>;
};
export default Aside;