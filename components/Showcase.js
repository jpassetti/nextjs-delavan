import classNames from 'classnames/bind';
import Building from './Building';
import Card from './Card';
import CardGroup from './CardGroup';
import Container from './Container';
import Heading from './Heading';
import Link from 'next/link';
import Paragraph from './Paragraph';
import * as styles from './showcase.module.scss';

import { getHomeCards } from '../lib/api';

let cx = classNames.bind(styles)

const Showcase = ({location, title, introduction, category, backgroundImage}) => {
    const homeCards = getHomeCards();
    let showcaseClasses = cx({
        showcase: true,
        home: location === 'home',
    });
   
    if (location === 'home') {
        return <Building />
        {/*return <section className={showcaseClasses} style={{backgroundImage: `url(${backgroundImage})`}}>
            <CardGroup>
                {homeCards.map((card, index) => {
                    const {title, slug, featuredImage } = card;
                    return <Card key={index} title={title} slug={slug} backgroundImage={featuredImage?.node?.sourceUrl} />
                })}
            </CardGroup>           
            </section>*/}
    } else {
        return <section className={showcaseClasses} style={{backgroundImage: `url(${backgroundImage})`}}>
            <Container>
            <div className={styles.showcase__content}>
            {category && <Heading level="3" color="white">
                 <Link href={`/${category.slug}`}>
                 {category.title}
                 </Link>
             </Heading>
            }
            <Heading level="1" color="white">{title}</Heading>
            {introduction && <Paragraph intro color="white">{introduction}</Paragraph>}
            </div>
            </Container>
        </section>
    }
}
export default Showcase