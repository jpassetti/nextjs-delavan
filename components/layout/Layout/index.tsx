import React, { ReactNode } from 'react'; // Import React and ReactNode type

import Header from '../Header';
import Footer from '../Footer';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode; // Use the ReactNode type for the children prop
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
}
export default Layout