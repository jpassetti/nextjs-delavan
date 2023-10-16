import Col from "../components/layout/Col";
import Container from "../components/layout/Container";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import MainContent from "../components/layout/MainContent";
import Row from "../components/layout/Row";
import Section from "../components/layout/Section";
import Showcase from "../components/custom/Showcase";

import { DEFAULT_TITLE } from '../config';
import { getPageBySlug } from "../lib/api";

interface PageData {
    /* Define the structure of your API response data */
  }
  
  interface AboutProps {
    pageData: {
      title: string;
      content: string;
      excerpt: string;
      featuredImage: {
        node: {
        // Define the structure of the featuredImage object
            sourceUrl: string;
            altText: string;
            mediaDetails: {
                width: number;
                height: number;
            }
        };
      };
      // Add other properties as needed
    };
  }

export async function getStaticProps(): Promise<{ props: AboutProps }> {
    const pageData = await getPageBySlug("about");
    return {
        props: {
            pageData
        }, // will be passed to the page component as props
    }
}

export default function AboutPage({ pageData }: AboutProps): JSX.Element {
    const { title, content, excerpt, featuredImage } = pageData;
    const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;

    return <Layout>
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={excerpt ? excerpt : "Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses."} />
        </Head>
        <Showcase
            title={title}
            introduction={excerpt}
            backgroundImage={featuredImage ? featuredImage : null}
        />
        <Container>
            <Section>
                <Row justifyContent="center">
                    <Col xs={12} sm={10} md={8}>
                        {content &&
                            <MainContent content={content} />
                        }
                    </Col>
                </Row>
            </Section>
        </Container>
    </Layout>
}