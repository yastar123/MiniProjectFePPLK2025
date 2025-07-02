import React from "react";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";

const Detail = () => {
  const posts = [
    {
      id: 1,
      image: "/public/image/detail2.png",
      title: "House Boating On Lake Shasta",
      description: "The Best Way To Spend A Long 4th Of July Weekend. Wake Boarding, Swimming, Barbecues, And Fishing On The Water.",
      author: {
        name: "James",
        avatar: "/public/image/author1.jpg",
        date: "July 14, 2022",
      },
    },
    {
      id: 2,
      image: "/public/image/technology.jpg",
      title: "How To Choose The Right Laptop For...",
      description: "Choosing The Right Laptop For Programming Can Be A Tough Process. It's Easy To Get Confused While Researching The Various Options Available.",
      author: {
        name: "Robert",
        avatar: "/public/image/author1.jpg",
        date: "July 14, 2022",
      },
    },
    {
      id: 3,
      image: "/public/image/detail1.png",
      title: "Why Buying A New Car Makes More Sense...",
      description: "Many Experts Will Tell You Buying Cars Used Is Best For Your Long-Term Financial Health. Here's Why New Is The Way To Go.",
      author: {
        name: "Mary",
        avatar: "/public/image/author3.jpg",
        date: "July 14, 2022",
      },
    },
    {
      id: 4,
      image: "/public/image/food.jpg",
      title: "Lasagna Is But A Pasta Cake",
      description: "Re-Envision The Description Of A Common Food From A Different Perspective — It Is ... Pasta Cake.",
      author: {
        name: "Jon Kantner",
        avatar: "/public/image/author4.jpg",
        date: "July 14, 2022",
      },
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-1 h-6 bg-red-500 mr-3"></div>
            <h1 className="text-2xl font-bold text-gray-900">Related Posts</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">{post.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.description}</p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{post.author.name}</p>
                      <p className="text-gray-500 text-xs">{post.author.date}</p>
                    </div>
                  </div>
                  <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
                    <Bookmark className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
