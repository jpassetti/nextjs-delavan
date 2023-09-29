import { scroller } from 'react-scroll';
import Button from './Button';
import Heading from './Heading';
import Image from 'next/image';
import Paragraph from './Paragraph';

import styles from './space.module.scss';


const Space = ({space, setShowContactForm}) => {
    const {title, spaceInformation, featuredImage} = space.node;
    return <div 
    className={styles.space}
    >
        <Image 
            src={featuredImage?.node.sourceUrl}
            alt={featuredImage?.node.altText}
            width={featuredImage?.node.mediaDetails.width}
            height={featuredImage?.node.mediaDetails.height}
            className={styles.space__image}
        />
        <div className={styles.space__content}>
            <Heading level={2} color="white" marginBottom={1}>{title}</Heading>
            <Heading level={3} color="white" marginBottom={2} fontWeight="400">{spaceInformation.squareFt} ft.</Heading>
            <Paragraph color="white" marginBottom={2}>{spaceInformation.description}</Paragraph>
            <Button clickHandler={() => {
				//console.log("clicked");
                setShowContactForm(true);
				scroller.scrollTo('rentContactForm', {
					duration: 800,
					delay: 0,
					smooth: true,
				});
			}} label="Contact us" backgroundColor="yellow" fontColor="navy" size="small" />
        </div>
    </div>
}
export default Space;