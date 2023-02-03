import Heading from './Heading';
import Image from 'next/image';
import Paragraph from './Paragraph';

import styles from './space.module.scss';
import Button from './Button';

const Space = ({space}) => {
    const {title, size, description, featuredImage} = space;
    return <div 
    className={styles.space}
    >
        <Image 
            src="/building.jpg"
            alt={featuredImage?.node.altText}
            width={featuredImage?.node.mediaDetails.width}
            height={featuredImage?.node.mediaDetails.height}
            layout="responsive"
        />
        <div className={styles.space__content}>
            <Heading level="2" color="white" marginBottom="1">{title}</Heading>
            <Heading level="3" color="white" marginBottom="2" fontWeight="400">{size}</Heading>
            <Paragraph color="white" marginBottom="2">{description}</Paragraph>
            <Button label="Contact us" backgroundColor="yellow" fontColor="navy" url="/contact" />
        </div>
    </div>
}
export default Space;