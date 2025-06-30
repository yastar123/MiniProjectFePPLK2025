import React from 'react';
import Navbar from './navbar/navbar';
import Category from './category/category';
import LatestVideos from './latestvideo/latestvideo';
import ContactInfo from './contactinfo/contactinfo';
import ArticleGrid from './pagecategory/articlegrid';
import Pagination from './pagecategory/pagination';


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
             <Navbar />
             <Category />
             <LatestVideos/>
             <ContactInfo/>
             <ArticleGrid/>
             <Pagination/>
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
};

export default Layout; 