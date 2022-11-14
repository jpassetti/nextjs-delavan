import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({children}) => {
    return <div>
        <Head>
            <title>Delavan Studios | Syracuse, NY</title>
            <meta name="description" content="Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses." />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
}
export default Layout