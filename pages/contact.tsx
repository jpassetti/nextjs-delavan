import Head from 'next/head';
import Col from '../components/layout/Col';
import Layout from "../components/layout/Layout";
import MainContent from '../components/layout/MainContent';
import Section from '../components/layout/Section';
import Showcase from "../components/custom/Showcase";
import Container from "../components/layout/Container";
import Row from '../components/layout/Row';
import { DEFAULT_TITLE } from '../config';

import { getPageBySlug } from "../lib/api";

export async function getStaticProps( {params}) {
    const pageData = await getPageBySlug("contact");
    return {
        props: {
            pageData
        }
    }
}

const ContactPage = ({pageData}) => {
    const {title, content, excerpt, featuredImage} = pageData;
    const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;

    return <Layout>
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={ excerpt ? excerpt : "Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses." } />
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
                   <MainContent content={content} />
                </Col>
                </Row>
            </Section>
        </Container>
    </Layout>
}
export default ContactPage;