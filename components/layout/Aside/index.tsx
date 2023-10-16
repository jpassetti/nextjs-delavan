import React, { ReactNode } from 'react';
import styles from './aside.module.scss';

interface AsideProps {
    children: ReactNode;
  }

const Aside: React.FC<AsideProps> = ({ children }) => {
    return <aside className={styles.aside}>{children}</aside>;
};
export default Aside;