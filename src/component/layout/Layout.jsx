import React from 'react';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout; 