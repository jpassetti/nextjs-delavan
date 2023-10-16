import Head from "next/head";
import { useState } from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring'; // Import ParsedUrlQuery


import Container from "../../components/layout/Container";
import Grid from '../../components/layout/Grid';
import Heading from "../../components/typography/Heading";
import Layout from "../../components/layout/Layout";
import List from '../../components/list/List';
import Showcase from "../../components/custom/Showcase";

import { DEFAULT_TITLE } from '../../config';
import { getAllPosts, getAllCategories, getPageBySlug } from "../../lib/api";

interface Params extends ParsedUrlQuery {
    category: string;
}
type NewsLandingPageProps = {
    postsData,
    categoriesData,
    pageData?: {
        title?: string;
        content?: string;
        excerpt?:string;
        featuredImage?: {
            node?: {
            sourceUrl?: string;
            altText?: string;
            mediaDetails?: {
                width?: number;
                height?: number;
            };
        };
        }
    }
 }

type GetStaticPropsType = GetStaticProps<NewsLandingPageProps>;

export const getStaticProps: GetStaticPropsType = async ({ params }) => {
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
export default function NewsLandingsPage({ 
    postsData, categoriesData, pageData
  }: NewsLandingPageProps) {
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
    const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    return <Layout>
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={ excerpt ? excerpt : "Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses." } />
        </Head>
        <Showcase 
            title={title}
            slug="news"
            introduction={excerpt}
            backgroundImage={featuredImage ? featuredImage : null}
        />
         <Container>
         <Heading level={2} color="black" marginBottom={2} marginTop={6}>Latest</Heading>
            {displayFormat === 'grid' ? 
                <Grid posts={filteredPosts} />
            : displayFormat === 'list' ?
                <List data={filteredPosts} parentSlug="news" />
            : 'No format'
            }
        </Container>
    </Layout>
}