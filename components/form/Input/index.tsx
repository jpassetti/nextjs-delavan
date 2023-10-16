import React, { ChangeEvent } from 'react';

import { mapHtmlAttributes } from '../../../lib/utilities';

import classNames from 'classnames/bind'
import styles from './input.module.scss';

let cx = classNames.bind(styles);

interface InputProps {
    attribs?: any;
    value?: string;
    type?: 'text' | 'search' | 'email' | 'number';
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    id?: string;
    name?: string;
    required?: boolean;
  }

const Input: React.FC<InputProps> = ({
    attribs,
    value, 
    type = 'text', 
    onChange, 
    placeholder = '',
    id,
    name,
    required = false
}) => {
    let inputClasses = cx({
        input: true,
        'input--search': type === 'search'
      });
    
      return (
        <input
          className={inputClasses}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          id={id}
          name={name}
          required={required} // Passing the required prop
            {...mapHtmlAttributes(attribs)}
        />
      );
    }; 
export default Input;