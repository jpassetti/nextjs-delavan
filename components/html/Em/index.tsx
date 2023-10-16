import React from 'react';
import styles from './em.module.scss';

interface EmProps {
  children: React.ReactNode;
}

const Em: React.FC<EmProps> = ({ children }) => {
  return <em className={styles.em}>{children}</em>;
};

export default Em;