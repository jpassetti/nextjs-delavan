import Heading from './Heading';

import styles from './space.module.scss';

const Space = ({space}) => {
    const {title, size, description, featuredImage} = space;
    return <div 
    className={styles.space}
    style={{backgroundImage: `url(${featuredImage.node.sourceUrl})`}}
    >
        <div className={styles.space__content}>
            <Heading level="2" color="white" marginBottom="2">{title}</Heading>
            <Heading level="3" color="white">{size}</Heading>
        </div>
    </div>
}
export default Space;