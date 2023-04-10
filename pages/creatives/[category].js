import Head from "next/head";
import FilteredCreativeList from '../../components/FilteredCreativeList';
import Layout from "../../components/Layout";

import Showcase from "../../components/Showcase";

import { DEFAULT_TITLE } from '../../config';

import { 
    getAllCreatives, 
    getAllCreativeTypes, 
    getCreativeTypeBySlug,
    getAllCreativeTypeSlugs
    //getAllCreativeTypesWithCreatives 
} from "../../lib/api";

export async function getStaticPaths() {
    const creativeTypeSlugs = await getAllCreativeTypeSlugs();
    const paths = creativeTypeSlugs.map((creativeType) => {
        return {
            params: {
                category: creativeType.node.slug
            }
        }
    });
    return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
    const creativeTypeSlug = params.category;
    const creativeTypeData = await getCreativeTypeBySlug(creativeTypeSlug);
    const allCreatives = await getAllCreatives();
    const allCreativeTypes = await getAllCreativeTypes();
    
    return {
        props: {
            creativeTypeSlug,
            creativeTypeData,
            allCreatives,
            allCreativeTypes
        }
    }
}

const SingleCategoryPage = ({
    creativeTypeSlug, 
    creativeTypeData,
    allCreatives,
    allCreativeTypes
}) => {
    const { name: title, slug } = creativeTypeData;
    const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    return (
        <Layout>
            <Head>
                <title>{pageTitle}</title>
                {/*<meta name="description" content={excerpt ? excerpt : "Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses."} />*/}
            </Head>
            <Showcase
                category={{
                    title: "Creatives",
                    slug: "creatives"
                }}
                title={title}
                slug={slug}
                height="small"
                //introduction={excerpt}
                backgroundImage={"https://delavan.stayfresh.design/wp-content/uploads/2023/02/creatives.jpg"}
            />
            <FilteredCreativeList 
                creatives={allCreatives} 
                creativeTypes={allCreativeTypes} 
                initialCreativeType={creativeTypeSlug}
                initialTagSlug="all"
            />
        </Layout>
    );
}
export default SingleCategoryPage;