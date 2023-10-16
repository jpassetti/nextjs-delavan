import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './well.module.scss';

let cx = classNames.bind(styles);

interface WellProps {
  children: ReactNode;
  status?: "success" | "error" | "warning" | "info";
}

const Well: React.FC<WellProps> = ({ children, status="info" }) => {
  let wellClasses = cx({
    well: true,
    success: status === "success",
    error: status === "error",
    warning: status === "warning",
    info: status === "info",
  });
  return (
    <div className={wellClasses}>
      {children}
    </div>
  );
};

export default Well;