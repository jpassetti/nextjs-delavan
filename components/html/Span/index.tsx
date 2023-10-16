import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './span.module.scss';

interface SpanProps {
  children: ReactNode;
  position?: string;
}

let cx = classNames.bind(styles);

const Span: React.FC<SpanProps> = ({ children, position }) => {
  let spanClasses = cx({
    span: true,
    [`position-${position}`]: position,
  });
  return <span className={spanClasses}>{children}</span>;
};

export default Span;