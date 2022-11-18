import Head from 'next/head';
import Layout from "../components/Layout";
import Section from '../components/Section';
import Showcase from "../components/Showcase";
import Container from "../components/Container";
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

import { getPageBySlug } from "../lib/api";

export async function getStaticProps( {params}) {
    const pageData = await getPageBySlug(params.id);
    return {
        props: {
            pageData
        }
    }
}

const ContactPage = ({pageData}) => {
    const {title, content} = pageData;
    return <Layout>
        <Head>
            <title>{title} | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title={title}
            introduction={excerpt}
            backgroundImage="https://picsum.photos/600/400"
        />
        <Container> 
            <Section>
                <Heading level="2" marginBottom="2">Get in touch</Heading>
                <Paragraph>Use the form below to get in touch with us.</Paragraph>
            </Section>
        </Container>
    </Layout>
}
export default ContactPage;