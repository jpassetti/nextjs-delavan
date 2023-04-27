import classnames from 'classnames/bind';
import styles from './buttongroup.module.scss';

let cx = classnames.bind(styles);

const ButtonGroup = ({
    children, 
    justifyContent
}) => {
    let buttonGroupClasses = cx({
        btn_group: true,
        [`justify-content-${justifyContent}`]: justifyContent
    });
    return <div className={buttonGroupClasses}>{children}</div>
}
export default ButtonGroup;