import React, { ReactNode } from 'react';
import styles from './strong.module.scss';

interface StrongProps {
  children: ReactNode;
}

const Strong: React.FC<StrongProps> = ({ children }) => {
  return <strong className={styles.strong}>{children}</strong>;
};

export default Strong;