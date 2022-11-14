import Link from 'next/link'
import Container from './Container';
import Nav from './Nav';
import styles from './menuoverlay.module.scss';

import { getPages } from '../lib/api';

const MenuOverlay = ({closeHandler}) => {
    const pages = getPages();
    return <div className={styles.menuoverlay}>
        <button onClick={closeHandler}>Close</button>
        <Container>
            <h1>Delavan Studios</h1>
            <Nav pages={pages} location="mobile" />
       
        </Container>
    </div>
}
export default MenuOverlay