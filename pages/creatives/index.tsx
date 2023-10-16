// core components
import { useState, useEffect, useContext } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring'; // Import ParsedUrlQuery

// custom components
import FilterControls from '../../components/filters/FilterControls';
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import PostListContainer from '../../components/layout/PostListContainer';
import Showcase from '../../components/custom/Showcase';

// custom data
import { DEFAULT_TITLE } from '../../config';

// data functions
import { 
    getAllCreatives, 
    getAllCreativeTypes, 
    getPageBySlug, 
} from "../../lib/api";

// context
import { 
    AllCreativesContext,
    AllCreativeTypesContext,
    ActiveCreativeTypesContext,
    ActiveTagsContext,
} from '../../lib/context';

// utilities
import { 
    getPreparedTags 
} from '../../lib/utilities';

interface Params extends ParsedUrlQuery {
    category: string;
}

type CreativesLandingPageProps = {
   pageData: {
         title?: string;
         excerpt?: string;
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
   };
    allCreatives: any[];
    allCreativeTypes: any[];
}
type GetStaticPropsType = GetStaticProps<CreativesLandingPageProps, Params>;

export const getStaticProps: GetStaticPropsType = async ({ params }) => {
    const pageData = await getPageBySlug("creatives");
    const allCreatives = await getAllCreatives();
    const allCreativeTypes = await getAllCreativeTypes();
    return {
        props: {
            pageData,
            allCreatives,
            allCreativeTypes
        },
        revalidate: 86400, // In seconds
    }
}

export default function CreativesLandingPage({ 
    pageData,
    allCreatives,
    allCreativeTypes
}: CreativesLandingPageProps) {
    const [allCreativesState, setAllCreativesState] = useContext(AllCreativesContext);
    const [allCreativeTypesState, setAllCreativeTypesState] = useContext(AllCreativeTypesContext);
    const [activeCreativeTypesState, setActiveCreativeTypesState] = useContext(ActiveCreativeTypesContext);

    const [filteredCreativesState, setFilteredCreativesState] = useState(allCreativesState);

    const [filteredTagsState, setFilteredTagsState] = useState([]);
    const [activeTagsState, setActiveTagsState] = useContext(ActiveTagsContext);

    useEffect(() => {
        setAllCreativesState(allCreatives);
        setAllCreativeTypesState(allCreativeTypes);
        setActiveCreativeTypesState({ node: { name: "All", slug: "all" }});
    }, []);

    useEffect(() => {
        const preparedTags = getPreparedTags(allCreativesState);
        setFilteredTagsState(preparedTags);
    }, [allCreativesState]);


    const { title, excerpt, featuredImage } = pageData;
    const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;

    return <Layout>
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={excerpt ? excerpt : "Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses."} />
        </Head>
        <Showcase
            title={title}
            slug="creatives"
            introduction={excerpt}
            backgroundImage={featuredImage ? featuredImage : null}
            height="small"
        />
        <FilterControls 
            allCreativeTypes={allCreativeTypesState}
            activeCreativeType={{ node: { name: "All", slug: "all" } }}
            setActiveCreativeType={setActiveCreativeTypesState}
            filteredTags={filteredTagsState}
            activeTags={activeTagsState}
            setActiveTags={setActiveTagsState}
        />
        <PostListContainer 
            posts={allCreativesState}
            categories={allCreativeTypesState}
            activeCategory={activeCreativeTypesState}
            activeTags={activeTagsState}
        />
    </Layout>
}