import React from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const post = location.state?.post;

  if (!post) return <div className="text-center py-10">Data tidak ditemukan.</div>;

  return (
    <div className="w-full bg-gray-50 py-8 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Header Section */}
        <div className="flex items-center mb-8">
          <div className="w-1 h-6 bg-red-500 mr-3"></div>
          <h1 className="text-2xl font-bold text-gray-900">{post.title}</h1>
        </div>
        {/* Gambar utama */}
        {post.urlToImage && (
          <img src={post.urlToImage} alt={post.title} className="w-full h-72 object-cover rounded-lg mb-6" />
        )}
        {/* Info penulis dan tanggal */}
        <div className="flex items-center gap-3 mb-6">
          <img src="/image/user-default.png" alt={post.author} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-medium text-gray-900 text-sm">{post.author || "Unknown Author"}</p>
            <p className="text-gray-500 text-xs">{post.source?.name || "Unknown Source"}</p>
            <p className="text-gray-500 text-xs">{new Date(post.publishedAt).toLocaleString()}</p>
          </div>
        </div>
        {/* Isi berita */}
        <div className="prose max-w-none mb-6">
          <p className="text-lg mb-4">{post.description}</p>
          <p className="text-base text-gray-700">{post.content}</p>
        </div>
        {/* Link ke sumber asli */}
        {post.url && (
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Baca di sumber asli</a>
        )}
      </div>
    </div>
  );
};

export default Detail;
