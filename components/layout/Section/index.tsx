import React, { ReactNode } from 'react'; // Import React and ReactNode type


import classNames from 'classnames/bind'
import styles from './section.module.scss'

let cx = classNames.bind(styles);



interface SectionProps {
    borderBottom?: number;
    borderTop?: number;
    children?: ReactNode;
    paddingBottom?: number;
    paddingTop?: number;
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

export default Section