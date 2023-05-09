// core components
import { useEffect, useContext } from 'react';

// custom components
import FilterControls from '../../components/FilterControls';
import Head from "next/head";
import Layout from "../../components/Layout";
import PostListContainer from '../../components/PostListContainer';
import Showcase from '../../components/Showcase';

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
    ActiveCreativeTypesContext
} from '../../lib/context';

export async function getStaticProps() {
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

const CreativesLandingPage = ({
    pageData,
    allCreatives,
    allCreativeTypes
}) => {
    const [allCreativesState, setAllCreativesState] = useContext(AllCreativesContext);
    const [allCreativeTypesState, setAllCreativeTypesState] = useContext(AllCreativeTypesContext);
    const [activeCreativeTypesState, setActiveCreativeTypesState] = useContext(ActiveCreativeTypesContext);

    useEffect(() => {
        setAllCreativesState(allCreatives);
        setAllCreativeTypesState(allCreativeTypes);
    }, []);

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
            backgroundImage={featuredImage ? featuredImage.node : null}
            height="small"
        />
        <FilterControls 
            allCreativeTypes={allCreativeTypesState}
            activeCreativeType={{ node: { name: "All", slug: "all" } }}
            setActiveCreativeType={setActiveCreativeTypesState}
        />
        <PostListContainer 
            posts={allCreativesState}
            categories={allCreativeTypesState}
            activeCategory={{ node: { name: "All", slug: "all" } }}
        />
    </Layout>
}
export default CreativesLandingPage;