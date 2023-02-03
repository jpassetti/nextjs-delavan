import styles from './anchorlink.module.scss'

const AnchorLink = ({attribs, children, href, target, rel}) => {
	if (attribs && attribs.href) {
		return <a className={styles.anchorlink} href={attribs.href} target={attribs.target} rel={attribs.rel}>{children}</a>
	} else {
		return <a className={styles.anchorlink} href={href} target={target} rel={rel}>{children}</a>
	}
	
}
export default AnchorLink;