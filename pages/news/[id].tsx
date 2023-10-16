import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring'; // Import ParsedUrlQuery

import Aside from '../../components/layout/Aside';
import Col from '../../components/layout/Col';
import Container from '../../components/layout/Container';
import Head from 'next/head';
import Layout from "../../components/layout/Layout";
import MainContent from '../../components/layout/MainContent';
import Paragraph from '../../components/typography/Paragraph';
import Row from '../../components/layout/Row';
import Section from '../../components/layout/Section';
import Showcase from "../../components/custom/Showcase";

import { DEFAULT_TITLE } from '../../config';
import { getPostBySlug, getAllPostSlugs } from "../../lib/api";


interface Params extends ParsedUrlQuery {
    id: string;
}
interface PostData {
    title?: string;
    excerpt?: string;
    content?: string;
    featuredImage?: {
        node?: {
            id?: string;
            sizes?: string;
      sourceUrl?: string;
      altText?: string;
      mediaDetails?: {
        width?: number;
        height?: number;
      };
    };
    };
  }

export const getStaticPaths: GetStaticPaths<Params> = async () => {
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
export const getStaticProps: GetStaticProps<{ postData: PostData }, Params> = async ({ params }) => {
    const postData = await getPostBySlug(params.id);
    return {
        props: {
            postData
        }
    }
}
const SingleNewsPage: React.FC<{ postData: PostData }> = ({ postData }) => {
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
                backgroundImage={featuredImage ? featuredImage : null}
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