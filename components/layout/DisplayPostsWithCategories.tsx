import React from 'react';
import Card from '../custom/Card';
import Grid from './Grid';
import Heading from '../typography/Heading';
import IconAccessory from '../ui/Icon/IconAccessory';
import Section from './Section';
import SectionHeader from './Section/SectionHeader';
import Router from 'next/router';

interface CategoryNode {
  name: string;
  slug: string;
}

interface PostNode {
  title: string;
  slug: string;
  featuredImage?: {
    node: any; // Replace with the actual type
  };
}

interface DisplayPostsWithCategoriesProps {
  posts: {
    node: PostNode;
  }[];
  categories: {
    node: CategoryNode;
  }[];
}

const DisplayPostsWithCategories: React.FC<DisplayPostsWithCategoriesProps> = ({
  posts,
  categories,
}) => {
  return categories.map((category, index) => {
    const { name, slug } = category.node;
    return (
      <Section key={index}>
        <SectionHeader>
          <IconAccessory iconSlug={slug} />
          <Heading level={2} color="black" textTransform="uppercase" size="small">
            {name}
          </Heading>
        </SectionHeader>
        <Grid posts={posts} />
      </Section>
    );
  });
};

export default DisplayPostsWithCategories;