//packages
import { motion, AnimatePresence } from "framer-motion"
import classNames from 'classnames/bind'

// components
import Button from "./Button";
import ButtonUI from './ButtonUI';
import Col from './Col';
import Container from './Container';
import Heading from './Heading';
import Input from "./Input";
import Link from 'next/link';
import Nav from './Nav';
import Paragraph from './Paragraph';
import Row from './Row';
import SocialMediaLinks from './SocialMediaLinks';
import Wordmark from './Wordmark';

// styles
import styles from './overlay.module.scss';
let cx = classNames.bind(styles);

// data
import { getPages } from '../lib/api';


const Overlay = ({children, closeHandler, isOverlayActive, slug}) => {
    let overlayClasses = cx({
        overlay: true,
        [`bg-${slug}`]: slug
    });
    const overlayVariants = {
        show: {
          y: 0,
          //opacity: 1,
          transition: {
           // x: { stiffness: 1000, velocity: -100 },
            duration: .5
          }
        },
        hidden: {
          y: "-100vh",
          //opacity: 0,
          transition: {
            duration: .5
            //x: { stiffness: 1000 }
          }
        },
        exit: {
            y: "-100vh",
           // opacity: 0,
            transition: {
                delay: .6,
                duration: .5
                //x: { stiffness: 1000 }
            }
        }
      };

    return <AnimatePresence>
        {isOverlayActive && <motion.div 
        key={`modal-${slug}`} 
        className={overlayClasses}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={overlayVariants}
        >
        <div>
            <ButtonUI clickHandler={closeHandler} iconSlug="close" iconColor={slug === "menu" ? "white" : "blue"} active="true" />
            {children}
        </div>
       
    </motion.div> 
    }
    </AnimatePresence>
}
const Menu = ({closeHandler, isOverlayActive}) => {
    const pages = getPages();
   
    return <Overlay slug="menu" closeHandler={closeHandler} slug="menu" isOverlayActive={isOverlayActive}>
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
const Search = ({closeHandler, isOverlayActive}) => {
    return <Overlay slug="search" closeHandler={closeHandler} slug="search" isOverlayActive={isOverlayActive}>
        <Container>
            <Row justifyContent="center">
                <Col xs="12" sm="10" md="8">
                <Heading level="3" marginBottom="2" color="blue" textTransform="uppercase" size="sm">Search</Heading>
                    <Row flexDirection="row">
                        <Col xs={12} sm={10}><Input /></Col>
                        <Col xs={12} sm={2}><Button label="Submit" backgroundColor="blue" fontColor="white" /></Col>
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    </Overlay>
}
Overlay.Search = Search;
export default Overlay;