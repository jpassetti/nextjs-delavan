import styles from './button.module.scss';

const Button = ({label}) => {
    return <button className={styles.btn}>{label}</button>
}
export default Button;