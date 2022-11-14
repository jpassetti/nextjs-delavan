import Layout from "../../components/Layout";
import Showcase from "../../components/Showcase";
import { getSingleNewsBySlug, getNews, getCategoryNameById } from "../../lib/api";

export async function getStaticPaths() {
    const news = await getNews();
    const paths = news.map(newsItem => {
        return {
            params: {
                id: newsItem.slug.toString()
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({params}) {
    const singleNewsData = await getSingleNewsBySlug(params.id);
    return {
        props: {
            singleNewsData
        }
    }
}

const SingleNewsPage = ({ singleNewsData }) => {
    const { title, categories, featuredImage } = singleNewsData;
    return (
        <Layout>
            <Showcase
                category={{
                    title: "News",
                    slug: "news"
                }}
                title={title} 
                backgroundImage={featuredImage?.node?.sourceUrl} 
            />
            <p>{categories.map(category => getCategoryNameById(category)).join(", ")}</p>
        </Layout>
    );
}
export default SingleNewsPage;