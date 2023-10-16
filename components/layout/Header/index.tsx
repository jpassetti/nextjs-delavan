import React, { ReactNode } from 'react'; // Import React and ReactNode type
import { useRouter } from 'next/router'

import { useState } from 'react';
import ButtonUI from '../../ui/Button/ButtonUI';
import Container from '../Container';
import Row from '../Row';
import OverlayMenu from '../Overlay/OverlayMenu';
import OverlaySearch from '../Overlay/OverlaySearch';
import styles from './header.module.scss'
import Link from 'next/link';
import Wordmark from '../../html/svg/Wordmark';

const Header: React.FC = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOverlayOpen, setSearchOverlayOpen] = useState(false);

    return <header className={styles.header}>
        <Container>
            <Row justifyContent="space-between" alignItems="center">
           
                <OverlayMenu 
                    isOverlayActive={menuOpen} 
                    closeHandler={() => {
                        setMenuOpen(false);
                    }} 
                />
                <OverlaySearch 
                    isOverlayActive={searchOverlayOpen} 
                    closeHandler={() => {
                        setSearchOverlayOpen(false);
                    }} 
                />
            
                <ButtonUI 
                iconSlug="menu" 
                iconColor="white" 
                active={true} 
                clickHandler={() =>{
                    setMenuOpen(!menuOpen);
                }}
                />
                    <Link href="/">
                        <Wordmark color="white" />
                    </Link>
                    <ButtonUI 
                    iconSlug="cart" 
                    iconColor="white" 
                    active={true} 
                    clickHandler={() =>{
                        router.push('/cart')
                    }}
                    />
            </Row>
        </Container>
    </header>
}
export default Header;