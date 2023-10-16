import React from 'react';

import classNames from 'classnames/bind';

import Icon from '../Icon';

import styles from './button.module.scss';

let cx = classNames.bind(styles);

interface ButtonAsSelectMenuProps {
    label: string;
    clickHandler: () => void;
    isActive: boolean;
    size?: string;
}


const ButtonAsSelectMenu: React.FC<ButtonAsSelectMenuProps> = ({
label, clickHandler, isActive, size 
}) => {
    let btnToggleClasses = cx({
        btn: true,
        toggle: true,
        active: isActive,
        [`size-${size}`] : size
    });
    return <button 
    className={btnToggleClasses}
    onClick={clickHandler}
    >{label} <Icon iconSlug="angle-down" iconColor="blue" /></button>  
}
export default ButtonAsSelectMenu;