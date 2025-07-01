import React from 'react';
import { FaBookmark } from 'react-icons/fa';

import cod from '../assets/img/toppost/cod.png';
import avatarJames from '../assets/img/toppost/gambar1.png';
import cod1 from '../assets/img/toppost/cod1.png';
import avatarRobert from '../assets/img/toppost/gambar2.png';
import cod2 from '../assets/img/toppost/cod2.png';
import avatarMary from '../assets/img/toppost/gambar3.png';
import cod3 from '../assets/img/toppost/cod3.png';
import avatarJonKanter from '../assets/img/toppost/gambar4.png';

const TopPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'House Boating On Lake Shasta',
      description: 'The Best Way To Spend A Long 4th Of July Weekend. Wake Boarding, Swimming, Barbecues...',
      image: cod,
      author: 'James',
      date: 'July 14, 2022',
      avatar: avatarJames,
    },
    {
      id: 2,
      title: 'How To Choose The Right Laptop For...',
      description: "Choosing The Right Laptop For Programming Can Be A Tough Process. It's Easy To Get Confused...",
      image: cod1,
      author: 'Robert',
      date: 'July 14, 2022',
      avatar: avatarRobert,
    },
    {
      id: 3,
      title: 'Why Buying A New Car Makes More ...',
      description: "Many Experts Will Tell You Buying Cars Used Is Best For Your Long-Term Financial Health. Here's...",
      image: cod2,
      author: 'Mary',
      date: 'July 14, 2022',
      avatar: avatarMary,
    },
    {
      id: 4,
      title: 'Lasagna Is But A Pasta Cake',
      description: 'Re-Envision The Description Of A Common Food From A Different Perspective — It Is... Pasta Cake...',
      image: cod3,
      author: 'Jon Kantner',
      date: 'July 14, 2022',
      avatar: avatarJonKanter,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="relative bg-gray-50 p-3 rounded-lg shadow border border-blue-300 hover:border-blue-500 transition duration-200">
            <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded-t-lg" />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{post.description.slice(0, 50)}...</p>

              {/* Profile */}
              <div className="flex items-center gap-2 mb-6">
                <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-gray-700">{post.author}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            </div>

            {/* Bookmark Icon */}
            <div className="absolute bottom-3 right-3">
              <FaBookmark className="text-gray-400 hover:text-blue-500 cursor-pointer" size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPosts;
