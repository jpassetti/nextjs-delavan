import React, { ReactNode } from 'react'; // Import React and ReactNode type

import classNames from 'classnames/bind';
import * as styles from './container.module.scss';

let cx = classNames.bind(styles);

interface ContainerProps {
	type?: string;
	children?: ReactNode; // ReactNode allows any valid JSX content
	content?: string;
	size?: string;
  }

const Container: React.FC<ContainerProps> = ({ type, children, content, size }) => {
	let containerClasses = cx({
		container: true,
		full: type === "full",
		content: content,
		[`size-${size}`] : size
	});
	return <div className={containerClasses}>{children}</div>
}
export default Container;