import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({children}) => {
    return <div>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
}
export default Layout