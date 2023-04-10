import Col from "../components/Col";
import Container from "../components/Container";
import Head from "next/head";
import Layout from "../components/Layout";
import MainContent from "../components/MainContent";
import Row from "../components/Row";
import Section from "../components/Section";
import Showcase from "../components/Showcase";

import { DEFAULT_TITLE } from '../config';
import { getPageBySlug } from "../lib/api";

export async function getStaticProps() {
    const pageData = await getPageBySlug("about");
    return {
        props: {
            timelineData,
            pageData
        }, // will be passed to the page component as props
    }
}

const AboutPage = ({ pageData }) => {
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
            backgroundImage={featuredImage?.node.sourceUrl}
        />
        <Container>
            <Section>
                <Row justifyContent="center">
                    <Col xs="12" sm="10" md="8">
                        {content &&
                            <MainContent content={content} />
                        }
                    </Col>
                </Row>
            </Section>
        </Container>
    </Layout>
}
export default AboutPage;