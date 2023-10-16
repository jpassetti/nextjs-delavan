import React, { ReactNode } from 'react'; // Import React and ReactNode type

import { useRouter } from 'next/router';
// packages
import { Fragment } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

// components
import Card from '../Card';
import CardGroup from '../Card/CardGroup';
import Col from '../../layout/Col';
import Container from '../../layout/Container';
import CreativeBorder from '../CreativeBorder';
import Heading from '../../typography/Heading';
import Image from 'next/image';
import Paragraph from '../../typography/Paragraph';
import Row from '../../layout/Row';

// styles
import styles from './showcase.module.scss';

let cx = classNames.bind(styles);

interface FeaturedImage {
    node?: {
        sourceUrl?: string;
        altText?: string;
        mediaDetails?: {
          width?: number;
          height?: number;
        };
        sizes?: string;
    }
  }
interface ShowcaseProps {
    backgroundImage? : FeaturedImage | null;
    category?: {
        title: string;
        slug: string;
    };
    height?: 'small' | 'large'; // Optional prop with specific values
    homeCardsData?: any[]; // Replace 'any' with the actual type of homeCardsData
    introduction?: string;
    location?: string;
    title?: string;
    slug?: string | null;
  }

const Showcase: React.FC<ShowcaseProps> = ({
    backgroundImage, 
    category, 
    height= 'large',
    homeCardsData, 
    introduction, 
    location, 
    title, 
    slug=null
}) => {
    const router = useRouter();
    const homeCards = homeCardsData;
    let showcaseClasses = cx({
        showcase: true,
        home: location === 'home',
        [`height-${height}`]: height,
    });
   
    if (location === 'home') {
        //return <Building />
        return <Fragment><section className={showcaseClasses}>
            {backgroundImage && 
                <Image 
                    src={backgroundImage.node.sourceUrl}
                    alt={backgroundImage.node.altText}
                    fill={true}
                    sizes={backgroundImage.node.sizes}
                    className={styles.showcase__background}
                    
                />
            }
                <Container>
                    <Row justifyContent="center">
                        <Col xs={12} sm={10} md={8}>
                <div className={styles.showcase__content}>
            <Paragraph color="white" marginBottom={3} type="medium"><strong>Delavan Studios</strong> is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side.</Paragraph>
            </div>  
            </Col>
            </Row>
            <CardGroup>
                {homeCards.map((card, index) => {
                    const {title, slug, featuredImage, categorySlug } = card;
                    return <Card 
                        key={index} 
                        clickHandler={(e) => {
                            e.preventDefault()
                            router.push(slug)
                        }} 
                        title={title} 
                        slug={slug} 
                        categorySlug={categorySlug}
                        backgroundImage={featuredImage ? featuredImage : null} 
                    />
                })}
            </CardGroup> 
           
            </Container> 
            
            </section>
            </Fragment>
    } else {
        return <Fragment><section className={showcaseClasses}>
            {backgroundImage &&
                <Image 
                    src={backgroundImage.node.sourceUrl}
                    alt={backgroundImage.node.altText}
                    fill={true}
                    priority={true}
                    sizes={backgroundImage.node.sizes}
                    className={styles.showcase__background}
                />
            }
            <Container>
            <div className={styles.showcase__content}>
            {category &&  <Heading level={3} marginBottom={2} color="tan" textTransform="uppercase">
                 <Link href={`/${category.slug}`}>
                 {category.title}
                 </Link>
             </Heading>
            }
            <Heading level={1} color="white" marginBottom={2} accentBottom={slug ? slug : null}>{title}</Heading>
            {introduction && <Paragraph type="intro" color="white">{introduction}</Paragraph>}
            </div>
            </Container>
        </section>
        <CreativeBorder />
        </Fragment>
    }
}
export default Showcase