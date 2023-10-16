import { scroller } from 'react-scroll';
import Button from '../../ui/Button';
import Heading from '../../typography/Heading';
import Image from 'next/image';
import Paragraph from '../../typography/Paragraph';

import styles from './space.module.scss';

interface SpaceProps {
    space: {
      node: {
        title?: string;
        spaceInformation?: {
          squareFt?: number;
          description?: string;
        }
        featuredImage?: {
          node?: {
            sourceUrl?: string;
            altText?: string;
            mediaDetails?: {
              width?: number;
              height?: number;
            };
          }
        };
        // Add other properties as needed
      };
    };
    setShowContactForm: (value: boolean) => void;
    // Add other props as needed
  }

const Space: React.FC<SpaceProps> = ({ space, setShowContactForm }) => {
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