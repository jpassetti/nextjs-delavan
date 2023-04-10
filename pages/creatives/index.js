import FilteredCreativeList from '../../components/FilteredCreativeList';
import Head from "next/head";
import Layout from "../../components/Layout";
import Showcase from '../../components/Showcase';

import { DEFAULT_TITLE } from '../../config';

import { 
    getAllCreatives, 
    getAllCreativeTypes, 
    getPageBySlug, 
} from "../../lib/api";

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
            backgroundImage={featuredImage?.node?.sourceUrl}
            height="small"
        />
        <FilteredCreativeList 
            creatives={allCreatives} 
            creativeTypes={allCreativeTypes} 
            initialCreativeType="all"
            initialTagSlug="all"
        />
    </Layout>
}
export default CreativesLandingPage;