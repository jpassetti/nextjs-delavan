import React, { ReactNode } from 'react'; // Import React and ReactNode type
import classNames from 'classnames/bind';
import styles from './row.module.scss'

let cx = classNames.bind(styles)

interface RowProps {
	borderBottom?: number;
	borderTop?: number;
	children?: ReactNode;
	alignItems?: string;
	justifyContent?: string;
	flexDirection?: string;
	flexWrap?: string;
	gap?: string;
	th?: boolean;
	tr?: boolean;
	marginTop?: number;
	marginRight?: number;
	marginBottom?: number;
	marginLeft?: number;
	paddingTop?: number;
	paddingRight?: number;
	paddingBottom?: number;
	paddingLeft?: number;
	paddingAll?: number;
  }

  const Row: React.FC<RowProps> = ({
	borderBottom,
	borderTop,
	children, 
	alignItems, 
	justifyContent, 
	flexDirection, 
	flexWrap,
	gap,
	th, tr,
	marginTop,
	marginRight,
	marginBottom,
	marginLeft,
	paddingTop,
	paddingRight,
	paddingBottom,
	paddingLeft,
	paddingAll,}) => {
	let rowClasses = cx({
		row: true,
		[`align-items-${alignItems}`] : alignItems,
		[`justify-content-${justifyContent}`] : justifyContent,
		[`flex-direction-${flexDirection}`] : flexDirection,
		[`flex-wrap-${flexWrap}`] : flexWrap,
		[`gap-${gap}`] : gap,
		[`table-header`] : th,
		[`table-row`] : tr,
		[`margin-top-${marginTop}`] : marginTop,
		[`margin-right-${marginRight}`]: marginRight,
		[`margin-bottom-${marginBottom}`]: marginBottom,
		[`margin-left-${marginLeft}`]: marginLeft,
		[`padding-top-${paddingTop}`] : paddingTop,
		[`padding-right-${paddingRight}`]: paddingRight,
		[`padding-bottom-${paddingBottom}`]: paddingBottom,
		[`padding-left-${paddingLeft}`]: paddingLeft,
		[`padding-all-${paddingAll}`] : paddingAll,
		[`border-bottom-${borderBottom}`] : borderBottom,
		[`border-top-${borderTop}`] : borderTop
	});
	return <div className={rowClasses}>{children}</div>
}
export default Row;