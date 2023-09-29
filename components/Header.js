import React, { ReactNode } from 'react'; // Import React and ReactNode type
import { useRouter } from 'next/router'

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
    const router = useRouter();
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
                    <ButtonUI 
                    iconSlug="cart" 
                    iconColor="white" 
                    active="true" 
                    clickHandler={() =>{
                        router.push('/cart')
                    }}
                    >Cart
                </ButtonUI>
            
            </Row>
        </Container>
    </header>
}
export default Header;