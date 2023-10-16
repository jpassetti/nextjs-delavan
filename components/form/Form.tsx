import React, { ReactNode } from 'react'; // Import React and ReactNode type
import styles from './form.module.scss';

interface FormProps {
	children?: ReactNode;
    id?: string;
    onSubmit?: (e: React.MouseEvent<HTMLFormElement>) => void;
}
const Form: React.FC<FormProps> = ({
    children,
    onSubmit,
    id
}) => {
    return (
        <form 
            id={id}
            className={styles.form} 
            onSubmit={onSubmit}>
            {children}
        </form>
    )
}
export default Form;