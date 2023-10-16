import styles from './formgroup.module.scss';

const FormGroup = ({children}) => {
    return <div className={styles.form_group}>{children}</div>
}
export default FormGroup;