import React, { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { getNews } from "../../api/newsApi";
import { Link } from "react-router-dom";

const TopPosts = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNews();
      setArticles(data.articles);
    };
    fetchData();
  }, []);

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const randomArticles = shuffleArray(articles).slice(0, 4);

  return (
    <div className="p-4 rounded-lg shadow-md mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {randomArticles.map((post, idx) => (
          <Link
            key={idx}
            to="/detail"
            state={{ post }}
            className="relative bg-gray-50 p-3 rounded-lg shadow border border-gray-200 block"
          >
            <img src={post.urlToImage} alt={post.title} className="w-full h-32 object-cover rounded-t-lg" />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{post.description?.slice(0, 50)}...</p>
              <div className="flex items-center gap-2 mb-6">
                <img src="/image/user-default.png" alt={post.author} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-gray-700">{post.author || "Unknown Author"}</p>
                  <p className="text-xs text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 right-3">
              <FaBookmark className="text-gray-400 hover:text-blue-500 cursor-pointer" size={20} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopPosts;
