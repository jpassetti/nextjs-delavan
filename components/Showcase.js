import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { Fragment } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import Building from './Building';
import Card from './Card';
import CardGroup from './CardGroup';
import Container from './Container';
import Heading from './Heading';
import Image from 'next/image';
import Paragraph from './Paragraph';
import WildSVG from './WildSVG'

import styles from './showcase.module.scss';

import { getHomeCards } from '../lib/api';
import CreativeBorder from './CreativeBorder';
import Row from './Row';
import Col from './Col';

let cx = classNames.bind(styles)

const Showcase = ({
    backgroundImage, 
    category, 
    height="large",
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
                    src={backgroundImage.sourceUrl}
                    alt={backgroundImage.altText}
                    //width={backgroundImage.mediaDetails.width}
                    //height={backgroundImage.mediaDetails.height}
                    fill={true}
                    sizes={backgroundImage.sizes}
                    className={styles.showcase__background}
                />
            }
                <Container>
                    <Row justifyContent="center">
                        <Col xs={12} sm={10} md={8}>
                <div className={styles.showcase__content}>
            <Paragraph color="white" marginBottom="3" type="medium"><strong>Delavan Studios</strong> is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side.</Paragraph>
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
                        backgroundImage={featuredImage ? featuredImage.node : null} 
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
                    src={backgroundImage.sourceUrl}
                    alt={backgroundImage.altText}
                    //width={backgroundImage.mediaDetails.width}
                    //height={backgroundImage.mediaDetails.height}
                    fill={true}
                    sizes={backgroundImage.sizes}
                    className={styles.showcase__background}
                />
            }
            <Container>
            <div className={styles.showcase__content}>
            {category &&  <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase">
                 <Link href={`/${category.slug}`}>
                 {category.title}
                 </Link>
             </Heading>
            }
            <Heading level="1" color="white" marginBottom="2" accentBottom={slug ? slug : null}>{title}</Heading>
            {introduction && <Paragraph intro color="white">{introduction}</Paragraph>}
            </div>
            </Container>
        </section>
        <CreativeBorder />
        </Fragment>
    }
}
export default Showcase