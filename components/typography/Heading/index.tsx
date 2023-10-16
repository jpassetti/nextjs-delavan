import React, { ReactNode } from 'react'; // Import React and ReactNode type

import classNames from 'classnames/bind'
import styles from './heading.module.scss';

let cx = classNames.bind(styles);

interface HeadingProps {
	accentBottom?: string | null;
	accentTop?: string | null;
	borderTop?: string | null;
	children: ReactNode;
	className?: string | null;
	color?: string;
	fontFamily?: string;
	fontStyle?: string;
	fontWeight?: string;
	level?: 1 | 2 | 3 | 4 | 5 | 6 | null;
	letterSpacing?: string | null;
	lineHeight?: string;
	marginTop?: number | null;
	marginBottom?: number | number;
	marginLeft?: number | null;
	marginRight?: number | null;
	name?: string | null;
	textAlign?: string | null;
	textTransform?: string | null;
	size?: string | null;
  }


  const Heading: React.FC<HeadingProps> = ({
	accentBottom=null,
	accentTop=null,
	borderTop=null,
	children, 
	className=null,
	color="blue", 
	fontFamily = "primary",
	fontStyle = "normal",
	fontWeight = "bold",
	level=null, 
	letterSpacing=null,
	lineHeight = "normal",
	marginTop=null, 
	marginBottom=1, 
	marginLeft=null, 
	marginRight=null, 
	name=null,
	textAlign=null, 
	textTransform=null,
	size=null,
}) => {
<<<<<<< HEAD:components/typography/Heading/index.tsx
	//console.log({name});
	const Tag = (name || level > 6 ? 'h6' : `h${level}`) as keyof JSX.IntrinsicElements;
=======
	// console.log({name});
	const Tag = name ? name : level > 6 ? 'h6' : `h${level}`;
>>>>>>> stayfresh/main:components/Heading.js

	let headingClasses = cx({
		heading: true,
		[`${Tag}`]: name || level,
		[`text-align-${textAlign}`] : textAlign,
		[`margin-top-${marginTop}`] : marginTop,
		[`margin-right-${marginRight}`]: marginRight,
		[`margin-bottom-${marginBottom}`]: marginBottom,
		[`margin-left-${marginLeft}`]: marginLeft,
		[`border-top-${borderTop}`] : borderTop,
		[`text-transform-${textTransform}`] : textTransform,
		[`font-weight-${fontWeight}`] : fontWeight,
		[`font-color-${color}`] : color,
		[`font-style-${fontStyle}`] : fontStyle,
		[`line-height-${lineHeight}`] : lineHeight,
		[`font-family-${fontFamily}`] : fontFamily,
		[`font-size-${size}`] : size,
		[`letter-spacing-${letterSpacing}`] : letterSpacing,
		[`size-${size}`] : size,
		[`top-accent`] : accentTop,
		[`top-accent-${accentTop}`] : accentTop,
		[`bottom-accent`] : accentBottom,
		[`bottom-accent-${accentBottom}`] : accentBottom,
	});

	return <Tag className={`${headingClasses} ${className}`}>{children}</Tag>
}
export default Heading
