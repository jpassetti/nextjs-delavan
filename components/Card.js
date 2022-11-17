import { motion } from "framer-motion";
import Heading from './Heading';
import Link from 'next/link'
import { getCategoryNameById } from '../lib/api';
import styles from './card.module.scss'

const Card = ({title, slug, categories, backgroundImage, clickHandler}) => {
  //  console.log("Card");
    //console.log({categoryIds});
    const variants = {
        show: {
          x: 0,
          opacity: 1,
          transition: {
           // x: { stiffness: 1000, velocity: -100 },
            duration: .5
          }
        },
        hidden: {
          x: 50,
          opacity: 0,
          transition: {
            duration: .5
            //x: { stiffness: 1000 }
          }
        }
      };
    return <motion.article 
        variants={variants}
        className={styles.card} 
        style={{backgroundImage: `url(${backgroundImage})`}}
        onClick={clickHandler}    
    >
        <div className={styles.card__nameplate}>
    
            {categories?.edges.map(category => {
                const {name} = category.node;
                return <Heading level="4" marginBottom="2" color="tan" textTransform="uppercase" size="sm">{name}</Heading>
            })}
            <Heading level="3" color="white" className={styles.card__title}>
                <Link href={`/${slug}`}>
                {title}
                </Link>
            </Heading>
        </div>
        <div className={styles.card__cta}>
            <Link href={`/${slug}`}>
                View more
             </Link>
        </div>
    </motion.article>
}
export default Card;