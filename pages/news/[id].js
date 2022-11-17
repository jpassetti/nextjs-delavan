import Aside from '../../components/Aside';
import Col from '../../components/Col';
import Container from '../../components/Container';
import Head from 'next/head';
import Layout from "../../components/Layout";
import MainContent from '../../components/MainContent';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Section from '../../components/Section';
import Showcase from "../../components/Showcase";
import { getPostBySlug, getAllPostSlugs } from "../../lib/api";

export async function getStaticPaths() {
    const posts = await getAllPostSlugs();
    const paths = posts.map(edge => {
        return {
            params: {
                id: edge.node.slug
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({params}) {
    const postData = await getPostBySlug(params.id);
    return {
        props: {
            postData
        }
    }
}

const SingleNewsPage = ({ postData }) => {
    const { title, excerpt, content, featuredImage } = postData;
    return (
        <Layout>
            <Head>
                <title>{title} | Delavan Studios | Syracuse, NY</title>
            </Head>
            <Showcase
                category={{
                    title: "News",
                    slug: "news"
                }}
                title={title} 
                introduction={excerpt}
                backgroundImage={featuredImage?.node?.sourceUrl} 
            />
             <Container>
                <Row justifyContent="space-between">
                    <Col xs="12" sm="8" marginBottom="0">
                        <Section>
                            <MainContent content={content} />
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