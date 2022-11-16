import styles from './tags.module.scss';

const Tags = ({tags}) => {
    return <ul className={styles.tags}>
        {tags.map((tag, index) => {
            const {slug, name} = tag;
            return <li key={index} className={styles.tag}>{name}</li>
        })}
    </ul>
}
export default Tags;