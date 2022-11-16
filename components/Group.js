import styles from './group.module.scss';

const Group = ({children}) => {
    return <div className={styles.group}>
        {children}
    </div>
}
export default Group;