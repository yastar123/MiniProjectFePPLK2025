// src/components/LatestVideos.js

import React from "react"; // Kita hanya perlu React, tidak perlu hook lain

// 1. Data sekarang berisi TEPAT 5 video yang ingin ditampilkan.
const videoData = [
  {
    id: 1,
    title:
      "How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)",
    thumbnail: "/image/music_brain.jpg",
    url: "#",
    excerpt:
      "You’ve read all your free member-only stories, become a member to get unlimited access.",
  },
  {
    id: 2,
    title: "5 Reasons Why You Should Wrap Your Hands for Boxing",
    thumbnail: "/image/boxing_wrap.jpg",
    url: "#",
    excerpt:
      "So, You Finally Went To Your First Boxing Class And Learned The Basics...",
  },
  {
    id: 3,
    title: "Music Genre Classification with Python",
    thumbnail: "/image/headphones.jpg",
    url: "#",
    excerpt:
      "Music Is Like A Mirror, And It Tells People A Lot About Who You Are...",
  },
  {
    id: 4,
    title: "Exploring The World Of Modern Mechanical Keyboards",
    thumbnail: "/image/keyboard.jpg",
    url: "#",
    excerpt:
      "From clicky blues to silent reds, find the perfect switch for your typing needs.",
  },
  {
    id: 5,
    title: "The Rise of AI in Creative Arts and Design",
    thumbnail: "/image/technology.jpg",
    url: "#",
    excerpt:
      "Can a machine truly be creative? We explore the possibilities and pitfalls.",
  },
];

function LatestVideos() {

  // Langsung pisahkan data: 1 untuk utama, 4 untuk sampingan.
  const featuredVideo = videoData[0];
  const sideVideos = videoData.slice(1);

  return (
    <div className="col-span-full bg-white font-sans p-5 md:px-10">
      {/* Header dengan judul dan tombol panah (hanya visual) */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-gray-900">
          <span className="text-red-500 mr-2">•</span>
          Latest Videos
        </h2>
        <div className="flex space-x-2">
          {/* 3. Tombol panah hanya untuk hiasan, onClick tidak melakukan apa-apa */}
          <button
            className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 cursor-default"
            aria-label="Previous Videos"
          >
            &lt;
          </button>
          <button
            className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 cursor-default"
            aria-label="Next Videos"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Grid Video (Struktur visual tidak diubah) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Kolom Kiri: Video Utama */}
        {featuredVideo && (
          <div className="relative rounded-lg overflow-hidden shadow-lg group drop-shadow-sm">
            <div
              className="w-[1000px] h-[444px] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${featuredVideo.thumbnail})` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
              <button className="w-20 h-20 bg-white bg-opacity-40 rounded-full flex items-center justify-center  cursor-pointer">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 ">
              <h3 className="text-xl font-bold text-white box-decoration-clone">
                {featuredVideo.title}
              </h3>
              <p className="text-sm text-white mt-1 line-clamp-2">
                {featuredVideo.excerpt}
              </p>
            </div>
            <a
              href={featuredVideo.url}
              className="absolute inset-0"
              aria-label={featuredVideo.title}
            ></a>
          </div>
        )}

        {/* Kolom Kanan: 4 Video Kecil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sideVideos.map((video) => (
            <div
              key={video.id}
              className="relative rounded-lg overflow-hidden shadow-lg group bg-white transition-transform duration-300 hover:scale-105"
            >
              <div className="flex h-full">
                <div
                  className="w-1/2 flex-none bg-cover bg-center"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                ></div>
                <div className="p-4 w-1/2 flex flex-col justify-center">
                  <h4 className="font-semibold text-[14px] text-gray-800 line-clamp-3">
                    {video.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 mt-2 line-clamp-4">
                    {video.excerpt}
                  </p>
                </div>
              </div>
              <a
                href={video.url}
                className="absolute inset-0"
                aria-label={video.title}
              ></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestVideos;
