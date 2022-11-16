import Head from 'next/head';
import Layout from "../components/Layout";
import Section from '../components/Section';
import Showcase from "../components/Showcase";
import Container from "../components/Container";
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

const ContactPage = () => {
    
    return <Layout>
        <Head>
            <title>Contact | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title="Contact" 
            introduction="This is the introduction to the contact landing page"
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