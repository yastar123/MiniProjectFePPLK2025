import React from "react";
import { useState, useEffect } from "react";
import { getNews } from "../../api/newsApi";
import { Link } from "react-router-dom";

const PopularPost = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const simulateLoading = async () => {
      // Mengambil data dari API
      const data = await getNews();
      setArticles(data.articles);
      console.log("data API full", data);
      console.log("data API articles", data.articles);
    };
    simulateLoading();
  }, []);

  return (
    // judul + button
    <div className="flex my-10 md:my-16 flex-col items-center justify-center">
      {/* responsive1 */}
      <div className="relative w-full max-w-[90rem] mx-auto p-1 lg:w-[100%]">
        <h2 className="text-2xl font-semibold mb-5">
          <span className="bg-red-600 text-red-600 rounded-full">*</span> Popular posts
        </h2>

        <div className="absolute right-4 top-0 flex gap-2">
          <button className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
            <span className="text-xl">{"<"}</span>
          </button>
          <button className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
            <span className="text-xl">{">"}</span>
          </button>
        </div>

        {/* // card */}
        <div className="flex flex-wrap gap-14 justify-center">
          {articles.slice(0, 4).map((post, index) => (
            <Link
              key={index}
              to="/detail"
              state={{ post }}
              className="rounded-xl shadow-md border-[1px] p-2 w-full max-width-[] sm:w-[640px] md:w-[720px] lg:w-[21%] block"
            >
              <img src={post.urlToImage} className="w-full h-40 object-fill rounded-lg mb-3" alt={post.title} />
              <h3 className="font-bold mb-3">{post.title}</h3>
              <p className="text-sm line-clamp-2">{post.description}</p>

              {/* bookmark */}
              <div className="flex items-center justify-between mt-3 bg-gray-100 rounded-md">
                <div className="flex items-center gap-3 p-3">
                  <img src="/image/user-default.png" className="w-8 h-8 rounded-xl" alt="author" />
                  <div>
                    <p className="text-sm font-semibold">{post.author || "Unknown Author"}</p>
                    <p className="text-xs text-gray-500">{post.source?.name || "Unknown Source"}</p>
                    <p className="text-xs text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="w-4 mr-3">
                  <img src="/image/bookmark.png" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
