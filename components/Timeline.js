import Heading from './Heading';
import Paragraph from './Paragraph';
import styles from './timeline.module.scss'

const Timeline = ({children}) => {
    return <div className={styles.timeline}>{children}</div>
}
export default Timeline;
const TimelineItem = ({item}) => {
    return <div className={styles.timeline__item}>
        <Heading level="4" color="tan" marginBottom="1">{item.year}</Heading>
        <Heading level="3" marginBottom="2">{item.title}</Heading>
        <Paragraph>{item.description}</Paragraph>
    </div>
}
Timeline.Item = TimelineItem;