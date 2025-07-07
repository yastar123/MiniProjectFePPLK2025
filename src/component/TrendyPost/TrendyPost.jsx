import React, { useState, useEffect } from "react";
import { getNews } from "../../api/newsApi";
import { Link } from "react-router-dom";

const TrendyPost = () => {
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
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[90rem] mx-auto p-1 lg:w-[100%]">
                <h2 className="text-2xl font-semibold mb-5">
                    <span className="bg-red-600 text-red-600 rounded-full">*</span> Trendy posts
                </h2>
                <div className="absolute right-4 top-0 flex gap-2">
                    <button className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                        <span className="text-xl">{'<'}</span>
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                        <span className="text-xl">{'>'}</span>
                    </button>
                </div>
                <div className="flex flex-wrap gap-14 justify-center">
                    {randomArticles.map((post, index) => (
                        <Link
                            key={index}
                            to="/detail"
                            state={{ post }}
                            className="rounded-xl shadow-md border-[1px] p-2 w-full max-width-[] sm:w-[49%] md:w-[31%] lg:w-[21%] max-w-[900px] m-0 block"
                        >
                            <img src={post.urlToImage} className="w-full h-40 object-fill rounded-lg mb-3" alt={post.title} />
                            <h3 className="font-medium mb-3 line-clamp-1">{post.title}</h3>
                            <p className="text-sm line-clamp-2">{post.description}</p>
                            <div className="flex items-center justify-between mt-3 bg-gray-100 rounded-md">
                                <div className="flex items-center gap-3 p-3">
                                    <img src="/image/user-default.png" className="w-10 h-10 rounded-xl" alt="author" />
                                    <div>
                                        <p className="text-sm font-semibold">{post.author || "Unknown Author"}</p>
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

export default TrendyPost;
