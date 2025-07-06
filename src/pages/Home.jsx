import React, { useEffect, useState } from "react";
import Banner from "../component/banner/banner";
import Weather from "../component/weather/weather";
import TrendyPost from "../component/TrendyPost/TrendyPost";
import LatestVideos from "../component/latestvideo/latestvideo";
import PopularPost from "../component/PopularPost/PopularPost";
import Category from "../component/Category/Category";
import useLoading from "../hooks/useLoading";
import Loading from "../component/Loading/Loading";
import NewPosts from "../component/NewPost/NewPosts";
import TopPosts from "../component/TopPost/TopPosts";
import { getNews } from "../api/newsApi";

const Home = () => {
  const { isLoading, withLoading } = useLoading(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const simulateLoading = async () => {

      // Fungsi untuk memuat konten
      await withLoading(async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }, "Memuat Konten...");

      // Mengambil data dari API
      const data = await getNews();
      setArticles(data.articles);
      console.log("data API full", data);
      console.log("data API articles", data.articles);
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
      <NewPosts />
      <LatestVideos />
      <TrendyPost />
      <Weather />
      <TopPosts />
    </div>
  );
};
export default Home;
