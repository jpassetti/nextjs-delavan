import { useEffect, useContext } from "react";
import { 
    AllCreativesContext,
    AllCreativeTypesContext,
    ActiveCreativeTypesContext 
} from '../../lib/context';

import Head from "next/head";
import FilterControls from '../../components/FilterControls';
import Layout from "../../components/Layout";
import PostListContainer from "../../components/PostListContainer";

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
    const currentPageSlug = params.category;
    const creativeTypeData = await getCreativeTypeBySlug(currentPageSlug);
    const allCreatives = await getAllCreatives();
    const allCreativeTypes = await getAllCreativeTypes();
    
    return {
        props: {
            currentPageSlug,
            creativeTypeData,
            allCreatives,
            allCreativeTypes
        }
    }
}

const SingleCategoryPage = ({
    currentPageSlug, 
    creativeTypeData,
    allCreatives,
    allCreativeTypes
}) => {
    const [allCreativesState, setAllCreativesState] = useContext(AllCreativesContext);
    const [allCreativeTypesState, setAllCreativeTypesState] = useContext(AllCreativeTypesContext);
    const [activeCreativeTypesState, setActiveCreativeTypesState] = useContext(ActiveCreativeTypesContext);

    const { name: title, slug } = creativeTypeData;
    const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
 
    useEffect(() => {
        setAllCreativesState(allCreatives);
        setAllCreativeTypesState(allCreativeTypes);
    }, [allCreatives, allCreativeTypes]);

    return (
        <Layout>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Showcase
                category={{
                    title: "Creatives",
                    slug: "creatives"
                }}
                title={title}
                slug={currentPageSlug}
                height="small"
                backgroundImage={"https://delavan.stayfresh.design/wp-content/uploads/2023/02/creatives.jpg"}
            />
             <FilterControls 
                allCreativeTypes={allCreativeTypesState}
                activeCreativeType={{ node: { name: title, slug: slug } }}
                setActiveCreativeType={setActiveCreativeTypesState}
             />
             <PostListContainer 
                posts={allCreativesState}
                categories={allCreativeTypesState}
                activeCategory={{ node: { name: title, slug: slug } }}
            />
        </Layout>
    );
}
export default SingleCategoryPage;