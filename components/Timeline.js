import styles from './timeline.module.scss'

const Timeline = ({children}) => {
    return <div className={styles.timeline}>{children}</div>
}
export default Timeline;
const TimelineItem = ({item}) => {
    return <div className={styles.timeline__item}>
        <h4>{item.year}</h4>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
    </div>
}
Timeline.Item = TimelineItem;