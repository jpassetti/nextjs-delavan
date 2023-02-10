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

import classNames from 'classnames/bind'
import styles from './overlay.module.scss';

let cx = classNames.bind(styles);



import { getPages } from '../lib/api';
import Input from "./Input";
import Button from "./Button";

const Overlay = ({children, closeHandler, slug}) => {
    let overlayClasses = cx({
        overlay: true,
        [`bg-${slug}`]: slug
    });
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
    className={overlayClasses}
    initial={{ y: "-100vh" }}
    animate={{ y: 0 }}
    exit={{ y: "-100vh" }}
    transition={{ duration: 0.5 }}
    >
        <motion.div variants={variants}>
            <ButtonUI clickHandler={closeHandler} iconSlug="close" color={slug === "menu" ? "white" : "blue"} active="true" />
            {children}
        </motion.div>
    </motion.div>
}
const Menu = ({closeHandler}) => {
    const pages = getPages();
   
    return <Overlay closeHandler={closeHandler} slug="menu">
        <Container>
        <Row marginBottom="4">
                <Col xs="6" sm="4" md="3">
                    <Link href="/">
                        <Wordmark color="white" />
                    </Link>
                </Col>
                </Row>
                <Row>
                <Col xs="6" sm="6" md="3" marginTop="3">
                    <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Pages</Heading>
                    <Nav pages={pages} location="mobile" />
                </Col>
                <Col xs="6" sm="6" md="3" marginTop="3">
                    <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Visit</Heading>
                    <Paragraph color="white" marginBottom="2"><strong>Location</strong><br />
                    509 W Fayette St<br />
                    Syracuse, NY 13204</Paragraph>
                    
                    <Paragraph color="white"><strong>Gallery</strong><br />
                    8 a.m.-12 p.m.,<br />
                    1-5 p.m.</Paragraph>
                </Col>
                <Col xs="6" sm="6" md="3" marginTop="3">
                    <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Contact</Heading>
                    <Paragraph color="white">(315)800-5302</Paragraph>
                    <Paragraph color="white"><a href="mailto:info@delavanstudios.com">info@delavanstudios.com</a></Paragraph>
                </Col>
                <Col xs="6" sm="6" md="3" marginTop="3">
                    <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Connect</Heading>
                    <SocialMediaLinks color="white" />
                </Col>
            </Row>  
        </Container>
    </Overlay>
}
Overlay.Menu = Menu;
const Search = ({closeHandler}) => {
    return <Overlay closeHandler={closeHandler} slug="search">
        <Container>
            <Row justifyContent="center">
                <Col xs="12" sm="10" md="8">
                <Heading level="3" marginBottom="2" color="blue" textTransform="uppercase" size="sm">Search</Heading>
                    <Row flexDirection="row">
                        <Input /><Button label="Submit" />
                    </Row>
                </Col>
            </Row>
        </Container>
    </Overlay>
}
Overlay.Search = Search;
export default Overlay;