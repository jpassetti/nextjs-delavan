import { useEffect, useContext, useState } from "react";
import { 
    AllCreativesContext,
    AllCreativeTypesContext,
    ActiveCreativeTypesContext,
    ActiveTagsContext 
} from '../../lib/context';

import Head from "next/head";
import FilterControls from '../../components/FilterControls';
import Layout from "../../components/Layout";
import PostListContainer from "../../components/PostListContainer";

import Showcase from "../../components/Showcase";

import { DEFAULT_TITLE } from '../../config';

import { 
    getCreativesByTypeSlug, 
    getAllCreativeTypes, 
    getAllCreativeTypeSlugs
} from "../../lib/api";

import { 
    getPreparedTags
} from '../../lib/utilities';

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
    const creativeTypeData = await getCreativesByTypeSlug(currentPageSlug);
    const allCreativeTypes = await getAllCreativeTypes();
    
    return {
        props: {
            currentPageSlug,
            creativeTypeData,
            allCreativeTypes
        }
    }
}

const SingleCategoryPage = ({
    currentPageSlug, 
    creativeTypeData,
    allCreativeTypes
}) => {
    const [allCreativesState, setAllCreativesState] = useContext(AllCreativesContext);
    const [allCreativeTypesState, setAllCreativeTypesState] = useContext(AllCreativeTypesContext);
    const [activeCreativeTypesState, setActiveCreativeTypesState] = useContext(ActiveCreativeTypesContext);

    const [filteredTagsState, setFilteredTagsState] = useState([]);
    const [activeTagsState, setActiveTagsState] = useContext(ActiveTagsContext);

    const { name: title, slug, creatives } = creativeTypeData;
    const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
 
    useEffect(() => {
        setAllCreativesState(creatives.edges);
        setAllCreativeTypesState(allCreativeTypes);
        setActiveCreativeTypesState({ node: { name: title, slug: slug }});
        setActiveTagsState([{ node: { name: "All", slug: "all" }}]);
    }, [creatives]);

    useEffect(() => {
        const preparedTags = getPreparedTags(allCreativesState);
        setFilteredTagsState(preparedTags);
    }, [allCreativesState]);

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
                backgroundImage={{
                    sourceUrl: "https://delavan.stayfresh.design/wp-content/uploads/2023/02/creatives.jpg",
                    altText: "Creatives background image",
                    mediaDetails: {
                        height: 1333,
                        width: 2000
                    }
                }}
            />
             <FilterControls 
                allCreativeTypes={allCreativeTypesState}
                activeCreativeType={{ node: { name: title, slug: slug } }}
                setActiveCreativeType={setActiveCreativeTypesState}
                filteredTags={filteredTagsState}
                activeTags={activeTagsState}
                setActiveTags={setActiveTagsState}
             />
             <PostListContainer 
                posts={allCreativesState}
                categories={allCreativeTypesState}
                activeCategory={{ node: { name: title, slug: slug } }}
                activeTags={activeTagsState}
                setActiveTags={setActiveTagsState}
            />
        </Layout>
    );
}
export default SingleCategoryPage;