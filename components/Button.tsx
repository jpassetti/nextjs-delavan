import React from "react";
import classNames from 'classnames/bind';
import { motion } from "framer-motion"

import styles from './button.module.scss';
import Icon from './Icon';
import { type } from "os";

let cx = classNames.bind(styles);

interface Props {
    backgroundColor?: string;
    children?: React.ReactNode;
    className?: string;
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    fontColor?: string;
    iconAfter?: string;
    label?: string;
    size?: string;
    type?: string;
    url?: string;
    withMotion?: boolean;
    isClicked?: boolean;
  }

const Button: React.FC<Props> = ({
    backgroundColor,
    children,
    className,
    clickHandler,
    disabled,
    fontColor,
    iconAfter,
    isClicked, 
    label, 
    size,
    type="button",
    url, 
    withMotion
}) => {
    let buttonClasses = cx({
        btn: true,
        [`background-color-${backgroundColor}`]: backgroundColor,
        [`font-color-${fontColor}`]: fontColor,
        [`size-${size}`] : size,
        [`disabled`]: disabled,
    });
    const buttonMotionVariants = {
        show: {
          y: 0,
          opacity: 1,
          transition: {
            //delay: 1,
           // x: { stiffness: 1000, velocity: -100 },
            //duration: .5
          }
        },
        hidden: {
          y: -30,
          opacity: 0,
          transition: {
            //duration: .5,
            //delay: 3 
            //x: { stiffness: 1000 }
          }
        },
        exit: {
            y: -30,
            opacity: 0,
            transition: {
                duration: .5
                //x: { stiffness: 1000 }
            }
        }
      };
    if (withMotion) {
        return <motion.button variants={buttonMotionVariants} className={buttonClasses} onClick={clickHandler ? clickHandler : null}>
            {url ? <a href={url} target="_blank" rel="noopener noreferrer">
                {label ? label : ''} 
                {iconAfter ? <Icon color="white" iconSlug={iconAfter} /> : ''}
            </a> : label}
            {!url && iconAfter ? <Icon color="white" iconSlug={iconAfter} /> : ''}
        </motion.button>
    } else {
        return <button type={type} className={buttonClasses} onClick={clickHandler ? clickHandler : null}>
            {url ? <a href={url} target="_blank" rel="noopener noreferrer">
                {label ? label : ''} 
                {iconAfter ? <Icon color="white" iconSlug={iconAfter} /> : ''}
            </a> : label}
            {!url && iconAfter ? <Icon color="white" iconSlug={iconAfter} /> : ''}
        </button>
    }
}

const Toggle = ({label, clickHandler, isActive, size}) => {
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
Button.Toggle = Toggle;
const AsSelectMenu = ({label, clickHandler, isActive, size }) => {
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
Button.AsSelectMenu = AsSelectMenu;
export default Button;