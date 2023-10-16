import React from 'react'

import styles from './select.module.scss'

interface Option {
    value: string | number;
    label: string;
  }
interface SelectProps {
    options: Option[];
    changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    defaultValue?: { value: string; label: string };
    id?: string;
    name?: string;
    required?: boolean;
    selectedValue?: {
        value: string;
        label: string;
    }
}

const Select: React.FC<SelectProps> = ({ 
    options, 
    changeHandler, 
    id, 
    name, 
    required ,
    selectedValue
}) => {

    return <select 
        id={id} 
        name={name} 
        className={styles.select} 
        onChange={changeHandler}
        value={selectedValue.value} 
        required={required}
    >
        {options.map((option, index) => {
            const {label, value} = option;
            if (value !== "uncategorized") 
            return <option key={index} value={value}>{label}</option>
        })}
    </select>
}
export default Select