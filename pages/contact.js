import Head from 'next/head';
import Col from '../components/Col';
import ContactForm from '../components/ContactForm';
import Layout from "../components/Layout";
import Section from '../components/Section';
import Showcase from "../components/Showcase";
import Container from "../components/Container";
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

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
    return <Layout>
        <Head>
            <title>{title} | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title={title}
            introduction={excerpt}
            backgroundImage={featuredImage?.node?.sourceUrl} 
        />
        <Container> 
            <Section>
                <Heading level="2" marginBottom="2">Get in touch</Heading>
                <Paragraph>Use the form below to get in touch with us.</Paragraph>
                <Col xs="12" sm="6" md="4">
                <ContactForm />
                </Col>
            </Section>
        </Container>
    </Layout>
}
export default ContactPage;