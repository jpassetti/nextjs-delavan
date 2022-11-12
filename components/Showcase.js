import classNames from 'classnames/bind';
import Card from './Card';
import CardGroup from './CardGroup';
import Heading from './Heading';
import Paragraph from './Paragraph';
import * as styles from './showcase.module.scss';

let cx = classNames.bind(styles)

const Showcase = ({location, title, introduction}) => {
    let showcaseClasses = cx({
        showcase: true,
        home: location === 'home',
    });
    const cardsData = [
        {
            title: "Creatives",
            slug: "creatives",
        },
        {
            title: "Rent",
            slug: "rent",
        },
        {
            title: "News",
            slug: "news",
        },
    ]
    if (location === 'home') {
        return <section className={showcaseClasses}>
            <CardGroup>
                {cardsData.map((card, index) => {
                    return <Card key={index} title={card.title} slug={card.slug} />
                })}
            </CardGroup>           
        </section>
    } else {
        return <section className={showcaseClasses}>
            <Heading level="1">{title}</Heading>
            {introduction && <Paragraph intro>{introduction}</Paragraph>}
        </section>
    }
}
export default Showcase