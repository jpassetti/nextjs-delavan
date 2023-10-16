import React, { ReactNode } from 'react'; 

import styles from './group.module.scss';

interface GroupProps {
	children?: ReactNode; // ReactNode allows any valid JSX content
}

const Group: React.FC<GroupProps> = ({ children }) => {
    return <div className={styles.group}>
        {children}
    </div>
}
export default Group;