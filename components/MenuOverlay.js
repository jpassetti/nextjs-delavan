import ButtonUI from './ButtonUI';
import Link from 'next/link';
import Col from './Col';
import Container from './Container';
import Heading from './Heading';
import Nav from './Nav';
import Paragraph from './Paragraph';
import Row from './Row';
import SocialMediaLinks from './SocialMediaLinks';
import Wordmark from './Wordmark';
import styles from './menuoverlay.module.scss';


import { getPages } from '../lib/api';

const MenuOverlay = ({closeHandler}) => {
    const pages = getPages();
    return <div className={styles.menuoverlay}>
        <ButtonUI clickHandler={closeHandler} icon="close" />
        <Container>
            <Row>
                <Col xs="6" sm="3">
                    <Link href="/">
                        <Wordmark color="white" />
                    </Link>
                </Col>
                <Col sm="1"></Col>
                <Col sm="2" marginTop="3">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Pages</Heading>
                    <Nav pages={pages} location="mobile" />
                </Col>
                <Col xs="6" md="2" marginTop="3">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Visit</Heading>
    
                <Paragraph color="white" marginBottom="2"><strong>Location</strong><br />
                509 W Fayette St<br />
                Syracuse, NY 13204</Paragraph>
                
                <Paragraph color="white"><strong>Gallery</strong><br />
                8 a.m.-12 p.m.,<br />
                1-5 p.m.</Paragraph>
            </Col>
            <Col xs="6" md="2" marginTop="3">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Contact</Heading>
                <Paragraph color="white">(315)800-5302</Paragraph>
                <Paragraph color="white"><a href="mailto:email@email.com">email@email.com</a></Paragraph>
            </Col>
            <Col xs="12" md="2" marginTop="3">
                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Connect</Heading>
                <SocialMediaLinks />
            </Col>
            </Row>  
        </Container>
    </div>
}
export default MenuOverlay