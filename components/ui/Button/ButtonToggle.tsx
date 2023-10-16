import React from 'react';
import classNames from 'classnames/bind';

import styles from './button.module.scss';

let cx = classNames.bind(styles);

interface ButtonToggleProps {
    label: string;
    clickHandler: () => void;
    isActive: boolean;
    size?: string;
}


const ButtonToggle: React.FC<ButtonToggleProps> = ({
    label, clickHandler, isActive, size}) => {
    let btnToggleClasses = cx({
        btn: true,
        toggle: true,
        active: isActive,
        [`size-${size}`] : size
    });
    return <button 
    className={btnToggleClasses}
    onClick={clickHandler}
    >{label}</button>
}   
export default ButtonToggle;