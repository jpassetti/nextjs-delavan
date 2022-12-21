import classNames from 'classnames/bind'
import styles from './section.module.scss'

let cx = classNames.bind(styles)

const Section = ({
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
const Header = ({children}) => {
    return <div className={styles.sectionHeader}>
        {children}
    </div>
}
Section.Header = Header
export default Section