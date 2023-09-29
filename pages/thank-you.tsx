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
import Strong from '../components/Strong';

const ThankYouPage = () => {
    return <Layout>
        <Head>
            <title>Thank you</title>
        </Head>
        <Showcase 
            title="Thank you"
        />
        <Container> 
            <Section>
                <Row justifyContent="center">
                <Col xs={12} sm={10} md={8}>
                    <Paragraph><Strong>Your purchase was successful.</Strong></Paragraph>
                    <Paragraph>
                    You will receive an email confirmation shortly. If you have any questions or need further assistance, please contact us at <a href="mailto:info@delavanstudios.com">info@delavanstudios.com</a>.
                    </Paragraph>
                </Col>
                </Row>
            </Section>
        </Container>
    </Layout>
}
export default ThankYouPage;