import styles from './cardgroup.module.scss';

const CardGroup = ({children}) => {
    return <div className={styles.cardgroup}>{children}</div>
}
export default CardGroup;