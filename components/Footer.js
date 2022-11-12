import Container from './Container'

import styles from './footer.module.scss';

const Footer = () => {
    return <footer className={styles.footer}>
        <Container>
        <p>Footer</p>
        </Container>
    </footer>
}
export default Footer;