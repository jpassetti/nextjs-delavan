// components
import Overlay from '../Overlay';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import Nav from '../Nav';
import SocialMediaLinks from '../../list/SocialMediaLinks';
import Link from 'next/link';   
import Wordmark from '../../html/svg/Wordmark';


// data
import { getPages } from '../../../lib/api';

const OverlayMenu = ({closeHandler, isOverlayActive}) => {
    const pages = getPages();
   
    return <Overlay slug="menu" closeHandler={closeHandler} isOverlayActive={isOverlayActive}>
        <Container>
        <Row marginBottom={4}>
                <Col xs={6} sm={4} md={3}>
                    <Link href="/">
                        <Wordmark color="white" />
                    </Link>
                </Col>
                </Row>
                <Row>
                <Col xs={6} sm={6} md={3} marginTop={3}>
                    <Heading level={3} marginBottom={2} color="tan" textTransform="uppercase" size="sm">Pages</Heading>
                    <Nav pages={pages} location="mobile" />
                </Col>
                <Col xs={6} sm={6} md={3} marginTop={3}>
                    <Heading level={3} marginBottom={2} color="tan" textTransform="uppercase" size="sm">Visit</Heading>
                    <Paragraph color="white" marginBottom={2}><strong>Location</strong><br />
                    509 W Fayette St<br />
                    Syracuse, NY 13204</Paragraph>
                    
                    <Paragraph color="white"><strong>Gallery</strong><br />
                    8 a.m.-12 p.m.,<br />
                    1-5 p.m.</Paragraph>
                </Col>
                <Col xs={6} sm={6} md={3} marginTop={3}>
                    <Heading level={3} marginBottom={2} color="tan" textTransform="uppercase" size="sm">Contact</Heading>
                    <Paragraph color="white">(315)800-5302</Paragraph>
                    <Paragraph color="white"><a href="mailto:info@delavanstudios.com">info@delavanstudios.com</a></Paragraph>
                </Col>
                <Col xs={6} sm={6} md={3} marginTop={3}>
                    <Heading level={3} marginBottom={2} color="tan" textTransform="uppercase" size="sm">Connect</Heading>
                    <SocialMediaLinks color="white" />
                </Col>
            </Row>  
        </Container>
    </Overlay>
}
export default OverlayMenu;