import Aside from '../../components/Aside';
import Col from '../../components/Col';
import Container from '../../components/Container';
import Head from 'next/head';
import Layout from "../../components/Layout";
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Section from '../../components/Section';
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
    const { title, categories, content, featuredImage } = singleNewsData;
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Showcase
                category={{
                    title: "News",
                    slug: "news"
                }}
                title={title} 
                backgroundImage={featuredImage?.node?.sourceUrl} 
            />
             <Container>
                <Row justifyContent="space-between">
                    <Col xs="12" sm="8" marginBottom="0">
                        <Section>
                            <Paragraph marginBottom="0">Main content goes here.</Paragraph>
                        </Section>
                    </Col>
                    <Col xs="12" sm="3" marginBottom="0">
                        <Aside>
                          Sidebar content
                        </Aside>
                    </Col>
                </Row>
           </Container>
        </Layout>
    );
}
export default SingleNewsPage;