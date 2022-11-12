import Link from 'next/link'
import { getCategoryNameById } from '../lib/api';
import styles from './card.module.scss'

const Card = ({title, slug, categoryIds}) => {
    console.log("Card");
    console.log({categoryIds});
    return <div className={styles.card}>
        <Link href={`/${slug}`}>
            {categoryIds?.map((categoryId, index) => {
                const catName = getCategoryNameById(categoryId);
                console.log({catName});
                return <a key={index}>{catName}</a>
            })}
            <h3>{title}</h3>
        </Link>
    </div>
}
export default Card;