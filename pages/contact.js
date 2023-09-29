import Head from 'next/head';
import Col from '../components/Col';
import ContactForm from '../components/ContactForm';
import Layout from "../components/Layout";
import Section from '../components/Section';
import Showcase from "../components/Showcase";
import Container from "../components/Container";
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Row from '../components/Row';
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
            backgroundImage={featuredImage ? featuredImage.node : null}
        />
        <Container> 
            <Section>
                <Row justifyContent="center">
                <Col xs={12} sm={10} md={8}>
                    <Heading level={2} marginBottom={2}>Get in touch</Heading>
                    <Paragraph marginBottom={2}>Use the form below to get in touch with us.</Paragraph>
                    <ContactForm />
                </Col>
                </Row>
            </Section>
        </Container>
    </Layout>
}
export default ContactPage;