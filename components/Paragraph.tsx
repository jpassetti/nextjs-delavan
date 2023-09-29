import React, { ReactNode } from 'react'; // Import React and ReactNode type

import { decode } from 'html-entities';
import classNames from 'classnames/bind';
import * as styles from './paragraph.module.scss';

let cx = classNames.bind(styles);

interface ParagraphProps {
	type?: string;
	children: ReactNode;
	className?: string;
	color?: string;
	diminish?: boolean;
	marginBottom?: number | null;
	marginTop?: number | null;
	textAlign?: string | null;
	fontWeight?: string | null;
	paddingLeft?: number | null;
	paddingRight?: number | null;
  }

  const Paragraph: React.FC<ParagraphProps> = ({
	type, 
	children, 
	className,
	color,
	diminish,
	marginBottom=1, 
	marginTop,
	textAlign,
	fontWeight,
	paddingLeft,
	paddingRight,
}) => {

	let paragraphClasses = cx({
		paragraph: true,
		intro: type === 'intro',
		medium : type === 'medium',
		[`margin-bottom-${marginBottom}`] : marginBottom,
		[`margin-top-${marginTop}`]: marginTop,
		diminish : diminish,
		[`text-align-${textAlign}`] : textAlign,
		[`font-weight-${fontWeight}`] : fontWeight,
		[`font-color-${color}`] : color,
		[`padding-left-${paddingLeft}`] : paddingLeft,
		[`padding-right-${paddingRight}`] : paddingRight,
	});

	  // Convert children to a string using ReactNode utilities
	// const childrenString = React.Children.toArray(children)
    // .filter((child) => typeof child === 'string')
    // .join('');

	// Decode the string
	//const decodedContent = decode(childrenString);

	//return <p className={`${paragraphClasses} ${className}`}>{decodedContent}</p>
	return <p className={`${paragraphClasses} ${className}`}>{children}</p>
}
export default Paragraph;