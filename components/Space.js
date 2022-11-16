import Heading from './Heading';
import Paragraph from './Paragraph';

import styles from './space.module.scss';

const Space = ({space}) => {
    const {title, size, description, featuredImage} = space;
    return <div 
    className={styles.space}
    >
        <div className={styles.space__image} style={{backgroundImage: `url(${featuredImage.node.sourceUrl})`}}></div>
        <div className={styles.space__content}>
            <Heading level="2" color="white" marginBottom="1">{title}</Heading>
            <Heading level="3" color="white" marginBottom="2" fontWeight="400">{size}</Heading>
            <Paragraph color="white">{description}</Paragraph>
        </div>
    </div>
}
export default Space;