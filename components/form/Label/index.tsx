import React, { ReactNode }  from 'react'

import styles from './label.module.scss'

interface LabelProps {
    htmlFor?: string;
    children?: ReactNode;
  }

  const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
    return <label className={styles.label} htmlFor={htmlFor ? htmlFor : ''}>{children}</label>
}
export default Label