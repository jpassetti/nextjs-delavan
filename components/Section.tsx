import React, { ReactNode } from 'react'; // Import React and ReactNode type


import classNames from 'classnames/bind'
import styles from './section.module.scss'

let cx = classNames.bind(styles);

interface HeaderProps {
    children?: ReactNode;
}
const Header: React.FC<HeaderProps> = ({ children }) => { 
    return <div className={styles.sectionHeader}>
        {children}
    </div>
}

interface SectionProps {
    borderBottom?: string;
    borderTop?: string;
    children?: ReactNode;
    paddingBottom?: string;
    paddingTop?: string;
  }

const Section: React.FC<SectionProps> = ({
    borderBottom,
    borderTop,
    children,
    paddingBottom,
    paddingTop,
}) => {
    let sectionClasses = classNames.bind(styles)({
        ['section']: true,
        [`border-bottom-${borderBottom}`]: borderBottom,
        [`border-top-${borderTop}`]: borderTop,
        [`padding-bottom-${paddingBottom}`]: paddingBottom,
        [`padding-top-${paddingTop}`]: paddingTop,
    }); 
    return <section className={sectionClasses}>
        {children}
    </section>
}

(Section as React.FC<SectionProps> & { Header: React.FC<HeaderProps> }).Header = Header;

export default Section