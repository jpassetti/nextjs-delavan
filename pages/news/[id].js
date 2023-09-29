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

import { DEFAULT_TITLE } from '../../config';
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
    const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    return (
        <Layout>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={ excerpt ? excerpt : "Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses." } />
            </Head>
            <Showcase
                category={{
                    title: "News",
                    slug: "news"
                }}
                title={title} 
                introduction={excerpt ? excerpt : null}
                backgroundImage={featuredImage ? featuredImage.node : null}
            />
             <Container>
                <Row justifyContent="center">
                    <Col xs={12} sm={8} marginBottom={0}>
                        <Section>
                            {content && 
                                <MainContent content={content} />
                            }
                        </Section>
                    </Col>

                </Row>
           </Container>
        </Layout>
    );
}
export default SingleNewsPage;