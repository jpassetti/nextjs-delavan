import { useState } from 'react';
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
        <Col xs="6" sm="3" textAlign="left">
        <Link href="/">
            <Wordmark color="white" />
        </Link>
        </Col>
        <button onClick={() =>{
            setMenuOpen(!menuOpen);
        }}>Menu</button>
            </Row>
        </Container>
    </header>
}
export default Header;