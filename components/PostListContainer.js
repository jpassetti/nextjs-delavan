import { Fragment, useContext } from 'react';

import { 
  AllCreativesContext,
  AllCreativeTypesContext,
  ActiveCreativeTypesContext, 
}  from '../lib/context';

import Card from './Card';
import Col from './Col';
import Container from './Container';
import DisplayPosts from './DisplayPosts';
import DisplayPostsWithCategories from './DisplayPostsWithCategories';
import Grid from './Grid';
import Heading from './Heading';
import Icon from './Icon';
import Row from './Row';
import Router from 'next/router';
import Section from './Section';

// Define the PostList component
const PostListContainer = ({ 
  posts, 
  categories,
  activeCategory, 
}) => {

  function filterByCategory(targetCategorySlug, posts) {
    const filteredPosts = posts.filter((post) => {
      const { creativeTypes } = post.node;
      return creativeTypes.edges?.length && creativeTypes.edges.some(creativeType => creativeType.node.slug === targetCategorySlug);
      });
    const alphabetizedPosts = filteredPosts.sort((a, b) => {
        // if the creative has a business name, use that, otherwise use the last name
        const aTitle = a.node.creativeInformation.name.businessName ? a.node.creativeInformation.name.businessName : a.node.creativeInformation.name.lastName;
        const bTitle = b.node.creativeInformation.name.businessName ? b.node.creativeInformation.name.businessName : b.node.creativeInformation.name.lastName;
        if (aTitle < bTitle) {
          return -1;
        }
        if (aTitle > bTitle) {
          return 1;
        }
        return 0;
      });
    const sortedPosts = [...alphabetizedPosts].sort((a, b) => {
        if (a.node.featuredImage && !b.node.featuredImage) {
          // Place posts with featured images first
          return -1;
        } else if (!a.node.featuredImage && b.node.featuredImage) {
          // Place posts with no featured images last
          return 1;
        } else {
          // Preserve the original order for posts with the same featured image status
          return 0;
        }
      });
    return sortedPosts;
  }
 
  return <Container>
    
    {activeCategory.node.slug === "all" ?
      categories.map((category, index) => {
        const {name, slug} = category.node;
        return <Section borderTop={1} paddingTop={3} key={`category${index}`}>
            <Section.Header>
                <Icon.Accessory iconSlug={slug} />
                <Heading level="2" color="black" textTransform="uppercase" size="small">{name}</Heading>
                </Section.Header>
                <Grid posts={filterByCategory(slug, posts)} />
         </Section>
    })
    : 
      <Section borderTop={1} paddingTop={3}>
        <Grid posts={filterByCategory(activeCategory.node.slug, posts)} />
      </Section>
    }
    </Container>
  }
export default PostListContainer;