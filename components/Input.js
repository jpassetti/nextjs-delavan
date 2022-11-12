import styles from './input.module.scss'

const Input = ({ value, onChange }) => {
    return <input className={styles.input} type="text" value={value} onChange={onChange} />
}
export default Input