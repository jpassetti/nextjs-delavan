import styles from './space.module.scss';

const Space = ({space}) => {
    const {title, size, description, image} = space;
    return <div className={styles.space}>
        <div className="space__content">
            <h2>{title}</h2>
            <p>{size}</p>
        </div>
    </div>
}
export default Space;