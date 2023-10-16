import React, { ReactNode } from 'react';

import styles from './grid.module.scss'
import Card from '../../custom/Card';
import Router from 'next/router';

interface GridProps {
  posts?: {
    node: {
      title: string;
      slug: string;
      featuredImage?: {
        node: {
          sourceUrl: string;
          altText: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
      };
    };
  }[];
}

const Grid: React.FC<GridProps> = ({ posts }) => {
  return <div className={styles.grid}>
    {posts.map((post, index) => {
      const {title, slug, featuredImage} = post.node;
      const formattedSlug = `/creatives/details/${slug}`;
      return <Card 
          key={`post${index}`}
          title={title} 
          slug={formattedSlug}
          backgroundImage={featuredImage ? featuredImage : null}
          clickHandler={(e) => {
              e.preventDefault()
              featuredImage ? Router.push(formattedSlug) : '';
          }} 
      /> 
  })}
  </div>
}
export default Grid;