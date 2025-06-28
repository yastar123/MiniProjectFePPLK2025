import React from 'react';
import Navbar from './navbar/navbar';
import Category from './category/category';
import LatestVideos from './latestvideo/latestvideo';
import ContactInfo from './contactinfo/contactinfo';


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
             <Navbar />
             <Category />
             <LatestVideos/>
             <ContactInfo/>
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
};

export default Layout; 