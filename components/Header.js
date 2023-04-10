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
           
                <Overlay.Menu 
                    isOverlayActive={menuOpen} 
                    closeHandler={() => {
                        setMenuOpen(false);
                    }} 
                />
                <Overlay.Search 
                    isOverlayActive={searchOverlayOpen} 
                    closeHandler={() => {
                        setSearchOverlayOpen(false);
                    }} 
                />
            
                <ButtonUI 
                iconSlug="menu" 
                iconColor="white" 
                active="true" 
                clickHandler={() =>{
                    setMenuOpen(!menuOpen);
                }}
                >Menu
                </ButtonUI>
                <Link href="/">
                    <Wordmark color="white" />
                </Link>
               <div></div>
               {/* <ButtonUI 
                iconSlug="search" 
                iconColor="white" 
                active="true"
                clickHandler={() =>{
                    setSearchOverlayOpen(true);
                }}
                >Search
                </ButtonUI>
            */}
            </Row>
        </Container>
    </header>
}
export default Header;