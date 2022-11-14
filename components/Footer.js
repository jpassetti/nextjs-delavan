import Container from './Container'
import Col from './Col';
import Link from 'next/link';
import Nav from './Nav';
import Row from './Row';
import styles from './footer.module.scss';
import Wordmark from './Wordmark';

import { getPages } from '../lib/api';
import Heading from './Heading';
import Paragraph from './Paragraph';

const Footer = () => {
    const pages = getPages();
    return <footer className={styles.footer}>
        <Container>
        <Row>
            <Col xs="6" md="2">
                <Link href="/">
                    <Wordmark color="white" />
                </Link>
    
            </Col>
            <Col md="2"></Col>
            <Col md="2">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Pages</Heading>
                <Nav pages={pages} location="footer" />
            </Col>
            <Col md="2">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Visit</Heading>
    
                <Paragraph color="white" marginBottom="2"><strong>Location</strong><br />
                509 W Fayette St<br />
                Syracuse, NY 13204</Paragraph>
                
                <Paragraph color="white"><strong>Gallery</strong><br />
                8 a.m.-12 p.m., 1-5 p.m.</Paragraph>
            </Col>
            <Col md="2">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Contact</Heading>
                <Paragraph>(315)800-5302</Paragraph>
                <Paragraph color="white"><a href="mailto:email@email.com">email@email.com</a></Paragraph>
            </Col>
            <Col md="2">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Connect</Heading>
                <Paragraph color="white"><a href="https://www.facebook.com">Facebook</a></Paragraph>
                <Paragraph color="white"><a href="https://www.instagram.com">Instagram</a></Paragraph>
            </Col>
        </Row>
        </Container>
    </footer>
}
export default Footer;