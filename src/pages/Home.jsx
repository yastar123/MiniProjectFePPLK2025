import React from "react";
import Banner from "../component/banner/banner";
import Weather from "../component/weather/weather";
import TrendyPost from "../component/TrendyPost/TrendyPost";
import ComponentTeam from "../component/ComponentTeam/ComponentTeam";
import ContactInfo from "../component/contactinfo/contactinfo";
import LatestVideos from "../component/latestvideo/latestvideo";
import PopularPost from "../component/PopularPost/PopularPost";
import Category from "../component/Category/Category";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <Category />
      <PopularPost />
      <Banner />
      <LatestVideos />
      <TrendyPost />
      <Weather />
    </div>
  );
};

export default Home;
