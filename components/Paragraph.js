import {decode} from 'html-entities';
import classNames from 'classnames/bind';
import * as styles from './paragraph.module.scss';

let cx = classNames.bind(styles);

const Paragraph = ({
	type, 
	children, 
	className,
	color,
	diminish,
	marginBottom, 
	marginTop,
	textAlign,
	fontWeight
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
		[`font-color-${color}`] : color
	});
	const decodedContent = decode(children);
	return <p className={`${paragraphClasses} ${className}`}>{decodedContent}</p>
}
export default Paragraph;