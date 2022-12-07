import Head from "next/head";
import { useState } from "react";

import Container from "../../components/Container";
import Filters from "../../components/Filters";
import Grid from '../../components/Grid';
import Layout from "../../components/Layout";
import List from '../../components/List';
import Showcase from "../../components/Showcase";

import { getAllPosts, getAllCategories } from "../../lib/api";

export async function getStaticProps(context) {
    const postsData = await getAllPosts();
    const categoriesData = await getAllCategories();
    return {
      props: {
        postsData,
        categoriesData
      }, // will be passed to the page component as props
    }
  }

const NewsLandingsPage = ({postsData, categoriesData}) => {
    const [displayFormat, setDisplayFormat] = useState('list');
    const [activeCategory, setActiveCategory] = useState('news');
    const [searchTerm, setSearchTerm] = useState('');
    // todo: refactor filters
    const filteredPosts = postsData.filter(post => {
        const {categories} = post.node;
        return categories.edges.some(edge => edge.node.slug === activeCategory);
    });
    return <Layout>
        <Head>
            <title>News | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title="News" 
            introduction="This is the introduction to the news landing page"
            backgroundImage="https://picsum.photos/id/102/600/400"
        />
         <Container>
            <Filters 
                categories={categoriesData}
                changeCategory={setActiveCategory}
                displayFormat={displayFormat} 
                displayFormatClickHandler={setDisplayFormat} 
            />
            {displayFormat === 'grid' ? 
                <Grid data={filteredPosts} parentSlug="news" />
            : displayFormat === 'list' ?
                <List data={filteredPosts} parentSlug="news" />
            : 'No format'
            }
        </Container>
    </Layout>
}
export default NewsLandingsPage;