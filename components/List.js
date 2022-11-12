import styles from './list.module.scss'

const List = ({data}) => {
    return <ul className={styles.list}>
        {data.map((item, index) => {
            return <li key={index}>{item.title}</li>
        })}
    </ul>
}
export default List;