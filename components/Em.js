import styles from './em.module.scss';

const Em = ({children}) => {
    return <em className={styles.em}>{children}</em>
}
export default Em;