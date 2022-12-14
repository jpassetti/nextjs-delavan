import classNames from 'classnames/bind';
import Heading from './Heading';
import Paragraph from './Paragraph';
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
                    {small ? <Heading level="3" marginBottom="1">{item.title}</Heading> : <Heading level="2" marginBottom="1">{item.title}</Heading>}
                    <Paragraph>{item.size}</Paragraph>
                </div>
            })}
        </div>
    </div>
}
export default Slider;