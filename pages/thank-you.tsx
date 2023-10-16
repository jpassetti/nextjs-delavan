import Head from 'next/head';
import Col from '../components/layout/Col';
import Layout from "../components/layout/Layout";
import Section from '../components/layout/Section';
import Showcase from "../components/custom/Showcase";
import Container from "../components/layout/Container";
import Paragraph from '../components/typography/Paragraph';
import Row from '../components/layout/Row';
import Strong from '../components/html/Strong';

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