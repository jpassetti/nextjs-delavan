import classNames from 'classnames/bind'

import ContentParser from '../lib/parser'

import styles from './maincontent.module.scss'

let cx = classNames.bind(styles)

const MainContent = ({content, children}) => {
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