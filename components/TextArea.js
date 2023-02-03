import styles from './textarea.module.scss';

const TextArea = ({ onChange }) => {
    return <textarea className={styles.textarea} onChange={onChange} />
}
export default TextArea