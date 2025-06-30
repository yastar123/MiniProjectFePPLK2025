import React, { useState } from 'react';
import Pagination from './Pagination';
import { FiBookmark } from 'react-icons/fi'; 

// Data dummy
const articleData = [
  // Halaman 1
  { id: 1, category: 'Sport', thumbnail: 'public/image/boat.jpg', title: 'Opening Day Of Boating Season, Seattle WA', excerpt: 'Of Course The Right Sound Is Very Wordy, And Where There Is Make. These Are Basic, Today Is...', author: { name: 'James', avatar: 'public/image/james.jpg' }, date: 'August 18, 2021' },
  { id: 2, category: 'Tech', thumbnail: 'public/image/laptop.jpg', title: 'How To Choose The Right Laptop For...', excerpt: 'Choosing The Right Laptop For Programming Can Be A Tough Process. It’s Easy To Get Confused...', author: { name: 'Louis Hoebregts', avatar: 'public/image/louis.jpg' }, date: 'July 30, 2022' },
  { id: 3, category: 'Automotive', thumbnail: 'public/image/cars.jpg', title: 'How We Built The First Real Self-Driving Car', excerpt: 'Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World’s...', author: { name: 'Mary', avatar: 'public/image/mary.jpg' }, date: 'July 14, 2022' },
  { id: 4, category: 'Tech', thumbnail: 'public/image/setup.jpg', title: 'How To Choose The Right Laptop For...', excerpt: 'Choosing The Right Laptop For Programming Can Be A Tough Process. It’s Easy To Get Confused...', author: { name: 'Robert', avatar: 'public/image/louis.jpg' }, date: 'July 14, 2022' },
  { id: 5, category: 'Lifestyle', thumbnail: 'public/image/food.jpg', title: 'How To Persuade Your Parents To Buy Fast...', excerpt: 'Parents Often Don’t Want To Buy Fast Food, They May Be Worried That It’s Too Expensive, Unhealth...', author: { name: 'Jon Kantner', avatar: 'public/image/jon.jpg' }, date: 'May 10, 2024' },
  { id: 6, category: 'Automotive', thumbnail: 'public/image/bluesupercar.jpg', title: 'How To Build A Self-Driving Car In One Month', excerpt: 'Can I Learn The Necessary Computer Science To Build The Software Part Of A Self Driving Car In...', author: { name: 'Mary', avatar: 'public/image/mary.jpg' }, date: 'July 14, 2022' },
  { id: 7, category: 'Lifestyle', thumbnail: 'public/image/snow.jpg', title: 'Self-Improvement Has Become An Extreme...', excerpt: 'What We’re Taught We Must Do Each Day To Develop And Be Successful Has Gone Out Of Control. We...', author: { name: 'James', avatar: 'public/image/james.jpg' }, date: 'July 14, 2022' },
  { id: 8, category: 'Automotive', thumbnail: 'public/image/redcar.jpg', title: 'Why Buying A New Car Makes More Sense...', excerpt: 'Many Experts Will Tell You Buying Cars Used Is Best For Your Long Term Financial Health. Here’s...', author: { name: 'Mary', avatar: 'public/image/mary.jpg' }, date: 'July 14, 2022' },
  { id: 9, category: 'Cooking', thumbnail: 'public/image/foods.jpg', title: '10 Cooking Lessons To Use In Everyday Life', excerpt: 'I Recently Stumbled Upon This Quote By Paul Theroux: “Cooking Requires Confident Guesstimates...', author: { name: 'Jon Kantner', avatar: 'public/image/jon.jpg' }, date: 'July 14, 2022' },
  { id: 10, category: 'Design', thumbnail: 'public/image/retrosetup.jpg', title: 'Typography Can Make Or Break Your Design...', excerpt: 'One Of The Most Important Skills You Can Learn As A Designer Is How To Choose Type. This Is...', author: { name: 'Robert', avatar: 'public/image/louis.jpg' }, date: 'July 14, 2022' },
  { id: 11, category: 'Travel', thumbnail: 'public/image/surfing.jpg', title: 'House Boating On Lake Shasta', excerpt: 'The Best Way To Spend A Long 4th Of July Weekend. Wake Boarding, Swimming, Barbecues...', author: { name: 'James', avatar: 'public/image/james.jpg' }, date: 'July 14, 2022' },
  { id: 12, category: 'Cooking', thumbnail: 'public/image/cook.jpg', title: 'Lasagna Is But A Pasta Cake', excerpt: 'Re-Envision The Description Of A Common Food From A Different Perspective — It Is... Pasta Cake...', author: { name: 'Jon Kantner', avatar: 'public/image/jon.jpg' }, date: 'July 14, 2022' },
  // Halaman 2 
  { id: 13, category: 'Sport', thumbnail: 'public/image/boat.jpg', title: 'Another Great Day for Boating Season', excerpt: 'The weather was perfect for another adventure on the water...', author: { name: 'James', avatar: 'public/image/james.jpg' }, date: 'August 25, 2021' },
];


function ArticleGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;


  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articleData.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articleData.length / articlesPerPage);

  return (
    <div className="bg-gray-100 font-sans p-5 sm:p-8">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Judul Kategori */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-red-500">•</span> Category : <span className="font-semibold">Sport</span>
          </h1>
        </div>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentArticles.map((article) => (
            <div key={article.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-350">
              {/* Gambar Artikel */}
              <a href="#" className="block">
                <img src={article.thumbnail} alt={article.title} className="w-full h-40 object-cover" />
              </a>

              {/* Konten  */}
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  <a href="#" className="hover:text-blue-600">{article.title}</a>
                </h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {article.excerpt}
                </p>

                {/* Info Penulis */}
                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <img src={article.author.avatar} alt={article.author.name} className="w-6 h-6 rounded-full mr-2" />
                    <span>{article.author.name}</span>
                    <span className="mx-1">•</span>
                    <span>{article.date}</span>
                  </div>
                  <button className="hover:text-blue-700">
                    <FiBookmark size={25} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Komponen Paginasi */}
        <div className="mt-8">
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>

      </div>
    </div>
  );
}

export default ArticleGrid;