import classNames from 'classnames/bind';
import styles from './slider.module.scss';
let cx = classNames.bind(styles)


const Slider = ({ items, small, clickHandler, activeSpace }) => {
    return <div className={styles.slider}>
        <div className={styles.slider__items}>
            {items.map((item, index) => {
                let itemClasses = cx({
                    slider__item: true,
                    active: activeSpace === index
                });
                return <div key={index} className={itemClasses} onClick={() => {
                    clickHandler(index);
                }}>
                    {small ? <h3>{item.title}</h3> : <h2>{item.title}</h2>}
                    <p>{item.size}</p>
                </div>
            })}
        </div>
    </div>
}
export default Slider;