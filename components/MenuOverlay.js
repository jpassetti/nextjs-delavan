import { motion } from "framer-motion"

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
    const variants = {
        show: {
          x: 0,
          opacity: 1,
          transition: {
           // x: { stiffness: 1000, velocity: -100 },
            duration: .5
          }
        },
        hidden: {
          x: 50,
          opacity: 0,
          transition: {
            duration: .5
            //x: { stiffness: 1000 }
          }
        }
      };
    return <motion.div 
    key="modal" 
    className={styles.menuoverlay}
    initial={{ y: "-100vh" }}
    animate={{ y: 0 }}
    exit={{ y: "-100vh" }}
    transition={{ duration: 0.5 }}
    >
        <motion.div variants={variants}>
        <ButtonUI clickHandler={closeHandler} icon="close" color="white" />
        <Container>
            <Row>
                <Col xs="6" sm="4" md="3">
                    <Link href="/">
                        <Wordmark color="white" />
                    </Link>
                </Col>
                <Col xs="6" sm="8" md="1"></Col>
                <Col xs="6" sm="6" md="2" marginTop="3">
                    <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Pages</Heading>
                    <Nav pages={pages} location="mobile" />
                </Col>
                <Col xs="6" sm="6" md="2" marginTop="3">
                    <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Visit</Heading>
                    <Paragraph color="white" marginBottom="2"><strong>Location</strong><br />
                    509 W Fayette St<br />
                    Syracuse, NY 13204</Paragraph>
                    
                    <Paragraph color="white"><strong>Gallery</strong><br />
                    8 a.m.-12 p.m.,<br />
                    1-5 p.m.</Paragraph>
                </Col>
                <Col xs="6" sm="6" md="2" marginTop="3">
                    <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Contact</Heading>
                    <Paragraph color="white">(315)800-5302</Paragraph>
                    <Paragraph color="white"><a href="mailto:info@delavanstudios.com">info@delavanstudios.com</a></Paragraph>
                </Col>
                <Col xs="6" sm="6" md="2" marginTop="3">
                    <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Connect</Heading>
                    <SocialMediaLinks color="white" />
                </Col>
            </Row>  
        </Container>
        </motion.div>
    </motion.div>
}
export default MenuOverlay