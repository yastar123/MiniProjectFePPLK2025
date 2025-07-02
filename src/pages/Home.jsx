import React, { useEffect } from "react";
import Banner from "../component/banner/banner";
import Weather from "../component/weather/weather";
import TrendyPost from "../component/TrendyPost/TrendyPost";
import LatestVideos from "../component/latestvideo/latestvideo";
import PopularPost from "../component/PopularPost/PopularPost";
import Category from "../component/Category/Category";
import useLoading from "../hooks/useLoading";
import Loading from "../component/Loading/Loading";

const Home = () => {
  const { isLoading, withLoading } = useLoading(true);

  useEffect(() => {
    const simulateLoading = async () => {
      await withLoading(async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }, "Memuat Konten...");
    };
    simulateLoading();
  }, [withLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
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
