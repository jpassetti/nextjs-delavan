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
                {menuOpen && <MenuOverlay closeHandler={() => {
                    setMenuOpen(false);
                }} />}
                <Col xs="6" sm="4" md="3" textAlign="left" marginBottom="0">
                    <Link href="/">
                        <Wordmark color="white" />
                    </Link>
                </Col>
                <Col xs="6" sm="4" md="3" textAlign="right" marginBottom="0">
                    <ButtonUI icon="menu" color="white" clickHandler={() =>{
                        setMenuOpen(!menuOpen);
                    }}>Menu</ButtonUI>
                </Col>
            </Row>
        </Container>
    </header>
}
export default Header;