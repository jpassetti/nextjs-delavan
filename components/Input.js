import classNames from 'classnames/bind'
import styles from './input.module.scss';

let cx = classNames.bind(styles);

const Input = ({ 
    value, 
    type="text", 
    onChange, 
    placeholder 
}) => {
    let inputClasses = cx({
        input: true,
        'input--search': type === 'search'
    });
    return <input className={inputClasses} type={type} value={value} onChange={onChange} placeholder={placeholder ? placeholder : ''} />
}
export default Input