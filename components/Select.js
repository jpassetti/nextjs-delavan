import styles from './select.module.scss'

const Select = ({options, changeHandler, value}) => {
    return <select className={styles.select} onChange={(e) => {
        changeHandler(e.target.value);
    }} value={value}>
        {options.map((option, index) => {
            const {label, value} = option;
            if (value !== "uncategorized") 
            return <option key={index} value={value}>{label}</option>
        })}
    </select>
}
export default Select