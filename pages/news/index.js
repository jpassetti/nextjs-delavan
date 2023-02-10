import Head from "next/head";
import { useState } from "react";

import Container from "../../components/Container";
import Filters from "../../components/Filters";
import Grid from '../../components/Grid';
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import List from '../../components/List';
import Showcase from "../../components/Showcase";

import { getAllPosts, getAllCategories, getPageBySlug } from "../../lib/api";

export async function getStaticProps(context) {
    const postsData = await getAllPosts();
    const categoriesData = await getAllCategories();
    const pageData = await getPageBySlug("news");
    return {
      props: {
        postsData,
        categoriesData,
        pageData
      }, // will be passed to the page component as props
    }
  }

const NewsLandingsPage = ({postsData, categoriesData, pageData}) => {
    const [displayFormat, setDisplayFormat] = useState('list');
    const [activeCategory, setActiveCategory] = useState('news');
    const [searchTerm, setSearchTerm] = useState('');
    // todo: refactor filters
    const filteredPosts = postsData.filter(post => {
        const {categories} = post.node;
        if (activeCategory === 'all') {
            return post;
        }
        return categories.edges.some(edge => edge.node.slug === activeCategory);
    });
    const {title, content, excerpt, featuredImage} = pageData;
    return <Layout>
        <Head>
            <title>{title} | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title={title}
            slug="news"
            introduction={excerpt}
            backgroundImage={featuredImage?.node?.sourceUrl} 
        />
         <Container>
         <Heading level="2" color="black" marginBottom={2} marginTop={6}>Latest</Heading>
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