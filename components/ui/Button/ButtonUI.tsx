import React, { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames/bind';
import Icon from '../Icon';
import styles from './buttonui.module.scss';

interface ButtonUIProps {
    iconSlug?: string;
    clickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
    active?: boolean;
    iconColor?: string;
    type?: "button" | "reset" | "submit";
  }

let cx = classNames.bind(styles);

const ButtonUI: React.FC<ButtonUIProps> = ({
    iconSlug,
    clickHandler,
    active,
    iconColor,
    type,
  }) => {
    let buttonClasses = cx({
        buttonui: true,
        active: active,
        close: iconSlug === "close",
    });
    return <button className={buttonClasses} onClick={clickHandler} type={type ? type : null}>
        <Icon iconColor={iconColor} iconSlug={iconSlug} isActive={active ? true : false} />
    </button>
}
export default ButtonUI;