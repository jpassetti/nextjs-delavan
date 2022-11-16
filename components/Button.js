import styles from './button.module.scss';

const Button = ({label, url}) => {
    return <button className={styles.btn}>
        {url ? <a href={url} target="_blank" rel="noopener noreferrer">{label}</a> : label}
    </button>
}
export default Button;