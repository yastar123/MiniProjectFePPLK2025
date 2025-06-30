import React from 'react';
import Banner from  '../component/banner';
import Weather from "../component/weather"
import HeroAbout from '../component/hero-about';
import ArticleDetail from '../component/article-detail';


const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <Banner />
            <Weather />
            <HeroAbout/>
            <ArticleDetail/>
            <h1 className="text-4xl font-bold text-green-700 mb-4">Halaman Beranda</h1>
        </div>
    );
};

export default Home; 