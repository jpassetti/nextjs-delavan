import React, { Fragment } from 'react';
import Grid from './Grid';
import Heading from '../typography/Heading';
import IconAccessory from '../ui/Icon/IconAccessory';
import Section from './Section';
import SectionHeader from './Section/SectionHeader';

interface CategoryNode {
  name: string;
  slug: string;
}

interface DisplayPostsProps {
  posts: any[]; // Replace with the actual type of posts
  categories?: {
    node: CategoryNode;
  }[];
  withCategorySections?: boolean;
}

const DisplayPosts: React.FC<DisplayPostsProps> = ({
  posts,
  categories,
  withCategorySections,
}) => {
  return (
    <Section borderTop={1} paddingTop={2}>
      {withCategorySections
        ? categories?.map((category, index) => {
            const { name, slug } = category.node;
            return (
              <Fragment key={`category${index}`}>
                <SectionHeader>
                  <IconAccessory iconSlug={slug} />
                  <Heading
                    level={2}
                    color="black"
                    textTransform="uppercase"
                    size="small"
                  >
                    {name}
                  </Heading>
                </SectionHeader>
                <Grid posts={posts} />
              </Fragment>
            );
          })
        : <Grid posts={posts} />}
    </Section>
  );
};

export default DisplayPosts;