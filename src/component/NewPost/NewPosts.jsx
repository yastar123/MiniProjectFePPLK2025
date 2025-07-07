import React, { useState, useEffect } from "react";
import { Bookmark } from "lucide-react";
import { getNews } from "../../api/newsApi";
import { Link } from "react-router-dom";

const NewPosts = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNews();
      setArticles(data.articles);
    };
    fetchData();
  }, []);

  // Fungsi untuk mengacak array (Fisher-Yates)
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Ambil 4 data acak
  const randomArticles = shuffleArray(articles).slice(0, 4);

  return (
    <div className="max-w-7xl p-2 mx-auto mt-16 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-red-500 rounded"></div>
          <h2 className="text-2xl font-bold text-gray-900">New Posts</h2>
        </div>
        <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
          Show All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {randomArticles.map((post, idx) => (
          <Link
            key={idx}
            to="/detail"
            state={{ post }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden block"
          >
            <div className="flex">
              {/* Image */}
              <div className="w-48 h-44 md:h-32 flex-shrink-0">
                <img src={post.urlToImage || '/placeholder.svg'} alt={post.title} className="w-full h-full object-cover" />
              </div>
              {/* Content */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">{post.description}</p>
                </div>
                {/* Author and Bookmark */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <img src="/image/user-default.png" alt={post.author} className="w-6 h-6 rounded-full object-cover" />
                    <div>
                      <p className="text-xs font-medium text-gray-900">{post.author || "Unknown Author"}</p>
                      <p className="text-xs text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewPosts;
