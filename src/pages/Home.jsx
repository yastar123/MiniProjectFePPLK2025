import React from 'react';
import Banner from  '../component/banner';
import Weather from "../component/weather"


const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <Banner />
            <Weather />
            <h1 className="text-4xl font-bold text-green-700 mb-4">Halaman Beranda</h1>
        </div>
    );
};

export default Home; 