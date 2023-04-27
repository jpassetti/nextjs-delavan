import styles from './select.module.scss'

const Select = ({options, changeHandler, defaultValue}) => {
    return <select className={styles.select} onChange={(e) => {
        changeHandler(e);
    }} value={defaultValue.value}>
        {options.map((option, index) => {
            const {label, value} = option;
            if (value !== "uncategorized") 
            return <option key={index} value={value}>{label}</option>
        })}
    </select>
}
export default Select