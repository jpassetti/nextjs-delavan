import React from 'react';
import Router from 'next/router';
import Card from '../custom/Card';
import Grid from './Grid';

interface DisplayItemsProps {
  items: {
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
      creativeTypes: string[];
      categories: string[];
    };
  }[];
  parentSlug: string;
}

const DisplayItems: React.FC<DisplayItemsProps> = ({ items, parentSlug }) => {
  return (
    <Grid posts={items} />
  );
};

export default DisplayItems;