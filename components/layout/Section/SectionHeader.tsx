import React, { ReactNode } from 'react';
import styles from './section.module.scss'

interface HeaderProps {
    children?: ReactNode;
}
const SectionHeader: React.FC<HeaderProps> = ({ children }) => { 
    return <div className={styles.sectionHeader}>
        {children}
    </div>
}
export default SectionHeader;