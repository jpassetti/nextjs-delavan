import React from 'react';
import Container from "./Container";
import DisplayPosts from "./DisplayPosts";

interface CategoryNode {
  name: string;
  slug: string;
  creatives: {
    edges: any[]; // Replace with the actual type of edges
  };
  creativeTypeInformation: {
    svgIcon: string;
  } | null; // Replace with the actual type or structure
}

interface DisplayItemsByCategoryProps {
  posts: any[]; // Replace with the actual type of posts
  categories: {
    node: CategoryNode;
  }[];
  withCategorySections?: boolean;
}

const DisplayItemsByCategory: React.FC<DisplayItemsByCategoryProps> = ({ categories }) => {
  return (
    <Container>
      {categories.length > 0 && categories.map((category, index) => {
        const { creatives } = category.node;
        return creatives.edges.length > 0 && (
          <DisplayPosts
            key={index}
            posts={creatives.edges}
          />
        );
      })}
    </Container>
  );
}

export default DisplayItemsByCategory;