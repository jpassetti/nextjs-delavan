import React, { MouseEvent } from 'react';

import classNames from 'classnames/bind';
import { motion } from "framer-motion";
import Heading from '../../typography/Heading';
import Image from 'next/image';
import Link from 'next/link'
import styles from './card.module.scss'

let cx = classNames.bind(styles);

interface CardProps {
  title: string;
  slug: string;
  categories?: {
    edges?: {
      node?: {
        name?: string;
      }
    }[]
  };
  backgroundImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
      mediaDetails?: {
        width?: number;
        height?: number;
      };
      sizes?: string;
    }
  };
  clickHandler?: (event: MouseEvent<HTMLDivElement>) => void;
  categorySlug?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  slug,
  categories,
  backgroundImage,
  clickHandler,
  categorySlug,
}) => {
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

      let cardClasses = cx({
        card: true,
        'has-background': backgroundImage ? true : false,
        'no-background' : backgroundImage ? false : true,
        [`border-bottom-${categorySlug}`] : categorySlug,
      });
      let ctaClasses = cx({
        card__cta: true,
        [`background-color-${categorySlug}`] : categorySlug,
      });

    return <motion.article 
        variants={variants}
        className={cardClasses} 
       // style={{backgroundImage: `url(${backgroundImage ? backgroundImage : "none"})`}}
        onClick={clickHandler} 
        style={{ position: 'relative' }}   
    >
      {backgroundImage &&
        <Image 
        src={backgroundImage.node.sourceUrl}
        alt={backgroundImage.node.altText}
        //width={backgroundImage.mediaDetails.width}
        //height={backgroundImage.mediaDetails.height}
        fill={true}
        className={styles.card__image}
        sizes={backgroundImage.node.sizes}
      />
      }
        
        <div className={styles.card__nameplate}>
            {categories?.edges.map((category, index) => {
                const {name} = category.node;
                if (name !== "Featured")
                return <Heading key={index} level={4} marginBottom={2} color="tan" textTransform="uppercase" size="sm">{name}</Heading>
            })}
            <Heading level={3} color="white" textAlign="center" className={styles.card__title}>
                {backgroundImage ? <Link href={slug}>
                  {title}
                  </Link>
                : title
                }
            </Heading>
        </div>
        {backgroundImage &&  <div className={ctaClasses}>
            <Link href={slug}>
                View more
             </Link>
        </div>}
       
    </motion.article>
}
export default Card;