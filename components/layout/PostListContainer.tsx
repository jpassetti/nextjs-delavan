import React from 'react';

import Container from './Container';
import Grid from './Grid';
import Heading from '../typography/Heading';
import IconAccessory from '../ui/Icon/IconAccessory';
import Section from './Section';
import SectionHeader from './Section/SectionHeader';

import { 
  filterPostsByCategory,
  filterPostsByTags,
  alphabetizePosts,
  sortPosts 
} from '../../lib/utilities';

interface PostListContainerProps {
	posts?: any[]; // Adjust the type if 'content' has a different type
	categories?: any[];
  activeCategory?: {
    node?: {
      name?: string;
      slug?: string;
    }
  }
  activeTags?: any[];
  setActiveTags?: any;
}

// Define the PostList component
const PostListContainer: React.FC<PostListContainerProps> = ({ 
  posts, 
  categories,
  activeCategory, 
  activeTags,
  setActiveTags
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
            <SectionHeader>
                <IconAccessory iconSlug={slug} />
                <Heading level={2} color="black" textTransform="uppercase" size="small">{name}</Heading>
                </SectionHeader>
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