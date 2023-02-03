import classNames from 'classnames/bind'
import styles from './wildsvg.module.scss';

let cx = classNames.bind(styles);

const WildSVG = () => {
    let wildSVGClasses = cx({
        wildSVG: true,
    });
    return <svg width="100" height="100" className={wildSVGClasses}>
    <rect width="100" height="100" fill="red" stroke="none" />
 </svg> 
}
export default WildSVG;