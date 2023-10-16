import React from 'react'

import classNames from 'classnames/bind'

import ContentParser from '../../lib/parser'

import styles from './maincontent.module.scss'

let cx = classNames.bind(styles)

interface MainContentProps {
	content?: string; // Adjust the type if 'content' has a different type
	children?: React.ReactNode; // Adjust the type if 'children' have a different type
  }

const MainContent: React.FC<MainContentProps> = ({ content, children }) => {
    let mainContentClasses = cx({
		[`main-content`]: true
	});
	return <div className={mainContentClasses}>
		{content ? <ContentParser content={content} />
		: children
		}
	</div>
}
export default MainContent;