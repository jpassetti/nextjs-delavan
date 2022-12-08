import Container from './Container'
import Col from './Col';
import Icon from './Icon';
import Link from 'next/link';
import Nav from './Nav';
import Row from './Row';
import SocialMediaLinks from './SocialMediaLinks';
import styles from './footer.module.scss';
import Wordmark from './Wordmark';

import { getPages } from '../lib/api';
import Heading from './Heading';
import Paragraph from './Paragraph';

const Footer = () => {
    const pages = getPages();
    return <footer className={styles.footer}>
        <Container>
        <Row marginBottom="4">
            <Col xs="6" sm="4" md="2">
                <Link href="/">
                    <Wordmark color="white" />
                </Link>
    
            </Col>
        </Row> 
        <Row>
            <Col sm="6" md="3">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Pages</Heading>
                <Nav pages={pages} location="footer" />
            </Col>
            <Col sm="6" md="3">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Visit</Heading>
    
                <Paragraph color="white" marginBottom="2"><strong>Location</strong><br />
                509 W Fayette St<br />
                Syracuse, NY 13204</Paragraph>
                
                <Paragraph color="white"><strong>Gallery</strong><br />
                8 a.m.-12 p.m.,<br />
                1-5 p.m.</Paragraph>
            </Col>
            <Col sm="6" md="3">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Contact</Heading>
                <Paragraph>(315)800-5302</Paragraph>
                <Paragraph color="white"><a href="mailto:info@delavanstudios.com">info@delavanstudios.com</a></Paragraph>
            </Col>
            <Col sm="6" md="3">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Connect</Heading>
                <SocialMediaLinks color="white" />
            </Col>
        </Row>
        </Container>
    </footer>
}
export default Footer;