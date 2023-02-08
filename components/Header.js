import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import ButtonUI from './ButtonUI';
import Col from './Col';
import Container from './Container';
import MenuOverlay from './MenuOverlay';
import Row from './Row';
import styles from './header.module.scss'
import Link from 'next/link';
import Wordmark from './Wordmark';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return <header className={styles.header}>
        <Container>
            <Row justifyContent="space-between" alignItems="center">
            <AnimatePresence>
                {menuOpen && <MenuOverlay closeHandler={() => {
                    setMenuOpen(false);
                }} />}
                </AnimatePresence>
                <ButtonUI icon="menu" color="white" active="true" clickHandler={() =>{
                        setMenuOpen(!menuOpen);
                    }}>Menu</ButtonUI>
                    <Link href="/">
                        <Wordmark color="white" />
                    </Link>
               
                    <ButtonUI icon="search" color="white" active="true">Search</ButtonUI>
               
            </Row>
        </Container>
    </header>
}
export default Header;