import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './creativeborder.module.scss';

let cx = classNames.bind(styles);

const CreativeBorder: React.FC = () => {
  let creativeBorderClasses = cx({
    'creativeBorder': true,
  });

  let creativeTypes = ["design", "photography", "painting", "printmaking", "clothing", "other"];

  return (
    <div className={creativeBorderClasses}>
      {creativeTypes.map((type, index) => {
        let rand = Math.floor(Math.random() * 100);
        let borderClasses = cx({
          'border': true,
          [`background-color-${type}`]: type,
        });
        return <div key={`${index}-${rand}`} className={borderClasses}></div>
      })}
    </div>
  );
}

export default CreativeBorder;