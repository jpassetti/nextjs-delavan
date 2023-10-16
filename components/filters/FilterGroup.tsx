import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './filters.module.scss';

let cx = classNames.bind(styles);

interface FilterGroupProps {
  children: ReactNode;
  width: number;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ children, width }) => {
    let filterGroupClasses = cx({
        filterGroup: true,
        [`filterGroup__width-${width}`]: width
    });
    return <div className={filterGroupClasses}>
        {children}
    </div>
}
export default FilterGroup;