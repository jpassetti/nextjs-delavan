import Heading from './Heading';
import Link from 'next/link'
import { getCategoryNameById } from '../lib/api';
import styles from './card.module.scss'

const Card = ({title, slug, categoryIds, backgroundImage}) => {
  //  console.log("Card");
    //console.log({categoryIds});
    return <article className={styles.card} style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className={styles.card__nameplate}>
            <Heading level="4" color="white">{categoryIds?.map((categoryId, index) => {
                const catName = getCategoryNameById(categoryId);
               // console.log({catName});
                return catName
            })}</Heading>
            <Heading level="3" color="white" className={styles.card__title}>
                <Link href={`/${slug}`}>
                {title}
                </Link>
            </Heading>
        </div>
    </article>
}
export default Card;