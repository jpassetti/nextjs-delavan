import React, { ReactNode } from 'react'; // Import React and ReactNode type

import classNames from 'classnames/bind';
import * as styles from './col.module.scss';

let cx = classNames.bind(styles);

interface ColProps {
	backgroundColor?: string;
	borderLeft?: string;
	children?: ReactNode;
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	fontSize?: string;
	fontWeight?: string;
	marginTop?: number | null;
	marginRight?: number | null;
	marginBottom?: number | null;
	marginLeft?: number | null;
	paddingTop?: number | null;
	paddingRight?: number | null;
	paddingBottom?: number | null;
	paddingLeft?: number | null;
	paddingAll?: number;
	position?: string;
	th?: boolean;
	td?: boolean;
	textAlign?: string;
	flexOrder?: string;
  }

  const Col: React.FC<ColProps> = ({
	backgroundColor,
	borderLeft,
	children, 
	xs, 
	sm, 
	md, 
	lg, 
	xl, 
	fontSize,
	fontWeight,
	position="relative", 
	marginTop=null,
	marginRight=null,
	marginBottom=2,
	marginLeft=null,
	paddingTop=null,
	paddingRight=1,
	paddingBottom=null,
	paddingLeft=1,
	paddingAll,
	th,
	td,
	textAlign,
	flexOrder
}) => {
	
	const responsiveOrderArr = flexOrder ? flexOrder.split(" ") : null;
	const responsiveOrderObj = {};
	responsiveOrderArr?.forEach(string => {
		const [key, value] = string.split(":");
		responsiveOrderObj[key] = value;
	});

	let colClasses = cx({
		col: true,
		[`col__xs__${xs}`]: xs,
		[`col__sm__${sm}`]: sm,
		[`col__md__${md}`] : md,
		[`col__lg__${lg}`]: lg,
		[`col__xl__${xl}`]: xl,
		//sticky : position === 'sticky',
		[`margin-top-${marginTop}`] : marginTop,
		[`margin-right-${marginRight}`]: marginRight,
		[`margin-bottom-${marginBottom}`]: marginBottom,
		[`margin-left-${marginLeft}`]: marginLeft,
		[`padding-top-${paddingTop}`] : paddingTop,
		[`padding-right-${paddingRight}`]: paddingRight,
		[`padding-bottom-${paddingBottom}`]: paddingBottom,
		[`padding-left-${paddingLeft}`]: paddingLeft,
		[`padding-all-${paddingAll}`] : paddingAll,
		[`position-${position}`] : position,
		[`table-header`] : th,
		[`table-data-cell`] : td,
		[`text-align-${textAlign}`] : textAlign,
		[`font-size-${fontSize}`] : fontSize,
		[`font-weight-${fontWeight}`] : fontWeight,
		[`flex-order-xs-${responsiveOrderObj['xs']}`]: responsiveOrderObj.hasOwnProperty('xs'),
		[`flex-order-sm-${responsiveOrderObj['sm']}`]: responsiveOrderObj.hasOwnProperty('sm'),
		[`flex-order-md-${responsiveOrderObj['md']}`]: responsiveOrderObj.hasOwnProperty('md'),
		[`flex-order-lg-${responsiveOrderObj['lg']}`]: responsiveOrderObj.hasOwnProperty('lg'),
		[`flex-order-xl-${responsiveOrderObj['xl']}`]: responsiveOrderObj.hasOwnProperty('xl'),
		[`background-color-${backgroundColor}`] : backgroundColor,
		[`border-left-${borderLeft}`] : borderLeft,
	});

	return <div className={colClasses}>{children}</div>
}
export default Col;