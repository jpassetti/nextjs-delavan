import React, { ReactNode } from 'react';
import styles from './anchorlink.module.scss'

interface AnchorLinkProps {
	attribs?: Record<string, string>;
	children: ReactNode;
	href: string;
	target?: string;
	rel?: string;
  }

  const AnchorLink: React.FC<AnchorLinkProps> = ({
	attribs,
	children,
	href,
	target,
	rel,
  }) => {
	if (attribs && attribs.href) {
		return <a className={styles.anchorlink} href={attribs.href} target={attribs.target} rel={attribs.rel}>{children}</a>
	} else {
		return <a className={styles.anchorlink} href={href} target={target} rel={rel}>{children}</a>
	}
	
}
export default AnchorLink;