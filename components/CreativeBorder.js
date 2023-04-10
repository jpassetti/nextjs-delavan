import classNames from 'classnames/bind';
import * as styles from './creativeborder.module.scss';

let cx = classNames.bind(styles)



const CreativeBorder = () => {
    let creativeBorderClasses = cx({
        'creativeBorder': true,
    });
   
    let creativeTypes = ["design", "photography", "painting", "printmaking", "clothing", "other"];
    return <div className={creativeBorderClasses}>
        {creativeTypes.map((type, index) => {
            let rand = Math.floor(Math.random() * 100);
             let borderClasses = cx({
                'border': true,
                [`background-color-${type}`] : type,
                //[`flex-grow-${rand}`] : rand,
            });
            return <div key={`${index}-${rand}`} className={borderClasses}></div>
        })} 
    </div>
}
export default CreativeBorder