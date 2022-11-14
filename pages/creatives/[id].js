import Layout from "../../components/Layout";
import Showcase from "../../components/Showcase";
import { getSingleCreativeBySlug, getCreatives, getCategoryNameById } from "../../lib/api";

export async function getStaticPaths() {
    const creatives = await getCreatives();
    const paths = creatives.map(creative => {
        return {
            params: {
                id: creative.slug.toString()
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps( {params}) {
    const creative = await getSingleCreativeBySlug(params.id);
    return {
        props: {
            creative
        }
    }
}

const SingleCreativePage = ({ creative }) => {
    const { title, categories, featuredImage } = creative;
    return (
        <Layout>
            <Showcase
                category={{
                    title: "Creatives",
                    slug: "creatives"
                }}
                title={title}
                backgroundImage={featuredImage?.node?.sourceUrl} 
            />
            <p>{categories.map(category => getCategoryNameById(category)).join(", ")}</p>
        </Layout>
    );
}
export default SingleCreativePage;