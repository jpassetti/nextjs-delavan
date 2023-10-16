import React, { ChangeEvent } from 'react';
import styles from './textarea.module.scss';

interface TextAreaProps {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ 
  onChange, 
  id, 
  name,
  placeholder = '', 
  required = false
}) => {
  return <textarea 
    id={id} 
    className={styles.textarea} 
    name={name} 
    onChange={onChange} 
    placeholder={placeholder}
    required={required}
  />;
};

export default TextArea;