import React from 'react';
import Banner from  '../component/banner/banner';
import Weather from "../component/weather/weather"


const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <Banner />
            <Weather />
        </div>
    );
};

export default Home; 