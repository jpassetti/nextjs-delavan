import styles from './select.module.scss'

const Select = ({items, changeHandler}) => {
    return <select className={styles.select} onChange={(e) => {
        changeHandler(e.target.value);
    }}>
        {items.map((item, index) => {
            const {label, value} = item;
            return <option key={index} value={value}>{label}</option>
        })}
    </select>
}
export default Select