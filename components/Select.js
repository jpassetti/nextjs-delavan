import styles from './select.module.scss'

const Select = ({items, changeHandler, activeOption}) => {
    return <select className={styles.select} onChange={(e) => {
        changeHandler(e.target.value);
    }} value={activeOption}>
        {items.map((item, index) => {
            const {label, value} = item;
            if (value !== "uncategorized") 
            return <option key={index} value={value}>{label}</option>
        })}
    </select>
}
export default Select