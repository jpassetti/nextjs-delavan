import classNames from 'classnames/bind'
import styles from './heading.module.scss';

let cx = classNames.bind(styles);

const Heading = ({
	accentBottom=undefined,
	accentTop=undefined,
	borderTop=undefined,
	children, 
	className=undefined,
	color="blue", 
	fontFamily = "primary",
	fontStyle = "normal",
	fontWeight = "bold",
	level=undefined, 
	letterSpacing=undefined,
	lineHeight = "normal",
	marginTop=undefined, 
	marginBottom=1, 
	marginLeft=undefined, 
	marginRight=undefined, 
	name=null,
	textAlign=undefined, 
	textTransform=undefined,
	size=undefined,
}) => {
	console.log({name});
	const Tag = name ? name : level > 6 ? 'h6' : `h${level}`;

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