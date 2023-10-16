import React from "react";
import classNames from 'classnames/bind';
import { motion } from "framer-motion"

import styles from './button.module.scss';
import Icon from '../Icon';
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
    type?: "button" | "reset" | "submit";
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
                {iconAfter ? <Icon iconColor="white" iconSlug={iconAfter} /> : ''}
            </a> : label}
            {!url && iconAfter ? <Icon iconColor="white" iconSlug={iconAfter} /> : ''}
        </motion.button>
    } else {
        return <button type={type} className={buttonClasses} onClick={clickHandler ? clickHandler : null}>
            {url ? <a href={url} target="_blank" rel="noopener noreferrer">
                {label ? label : ''} 
                {iconAfter ? <Icon iconColor="white" iconSlug={iconAfter} /> : ''}
            </a> : label}
            {!url && iconAfter ? <Icon iconColor="white" iconSlug={iconAfter} /> : ''}
        </button>
    }
}

export default Button;