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

import { 
  filterPostsByCategory,
  filterPostsByTags,
  alphabetizePosts,
  sortPosts 
} from '../lib/utilities';

// Define the PostList component
const PostListContainer = ({ 
  posts, 
  categories,
  activeCategory, 
  activeTags
}) => {
  const preFilteredPostsByTags = filterPostsByTags(posts, activeTags);
  //console.log({activeTags});

  //console.log({posts});
  function filterPosts(posts, activeCategory) {
    // 1. Filter by creativeType
    const filteredPosts = filterPostsByCategory(posts, activeCategory);
  
    // 2. Alphabetize the posts
    const alphabetizedPosts = alphabetizePosts(filteredPosts);
   
    // 3. Sort by featured image status
    const sortedPosts = sortPosts(alphabetizedPosts);
    
    // 4. Return the sorted posts
    return sortedPosts;
  }

  return <Container>
    
    {(activeCategory && activeCategory.node.slug === "all") ?
      categories.map((category, index) => {
        const {name, slug} = category.node;
        const posts = filterPosts(preFilteredPostsByTags, category);
        return posts.length > 0 ? <Section borderTop={1} paddingTop={3} key={`category${index}`}>
            <Section.Header>
                <Icon.Accessory iconSlug={slug} />
                <Heading level={2} color="black" textTransform="uppercase" size="small">{name}</Heading>
                </Section.Header>
                <Grid posts={filterPosts(preFilteredPostsByTags, category)} />
         </Section>
         : '';
    })
    : 
      <Section borderTop={1} paddingTop={3}>
        <Grid posts={filterPosts(preFilteredPostsByTags, activeCategory)} />
      </Section>
    }
    </Container>
  }
export default PostListContainer;