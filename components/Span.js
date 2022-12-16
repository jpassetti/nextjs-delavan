import classNames from 'classnames/bind';
import styles from './Span.module.scss';

let cx = classNames.bind(styles);


const Span = ({children, position}) => {
    let spanClasses = cx({
        span: true,
        [`position-${position}`]: position,
    });
    return <span className={spanClasses}>{children}</span>
}
export default Span