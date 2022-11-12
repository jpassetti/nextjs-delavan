import { useState } from 'react';
import MenuOverlay from './MenuOverlay';
import styles from './header.module.scss'
import Link from 'next/link';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return <header className={styles.header}>
        {menuOpen && <MenuOverlay closeHandler={() => {
            setMenuOpen(false);
        }} />}
        <Link href="/"><h1>Delavan Studios</h1></Link>
        <button onClick={() =>{
            setMenuOpen(!menuOpen);
        }}>Menu</button>
    </header>
}
export default Header;