import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import ButtonUI from './ButtonUI';
import Col from './Col';
import Container from './Container';
import Row from './Row';
import Overlay from './Overlay';
import styles from './header.module.scss'
import Link from 'next/link';
import Wordmark from './Wordmark';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOverlayOpen, setSearchOverlayOpen] = useState(false);




    return <header className={styles.header}>
        <Container>
            <Row justifyContent="space-between" alignItems="center">
            <AnimatePresence>
                {menuOpen && <Overlay.Menu closeHandler={() => {
                    setMenuOpen(false);
                }} />}
                {searchOverlayOpen && <Overlay.Search closeHandler={() => {
                    setSearchOverlayOpen(false)
                }} />}
            </AnimatePresence>
                <ButtonUI 
                iconSlug="menu" 
                color="white" 
                active="true" 
                clickHandler={() =>{
                    setMenuOpen(!menuOpen);
                }}
                >Menu
                </ButtonUI>
                <Link href="/">
                    <Wordmark color="white" />
                </Link>
               
                <ButtonUI 
                iconSlug="search" 
                color="white" 
                active="true"
                clickHandler={() =>{
                    setSearchOverlayOpen(true);
                }}
                >Search
                </ButtonUI>
               
            </Row>
        </Container>
    </header>
}
export default Header;