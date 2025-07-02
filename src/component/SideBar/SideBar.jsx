import React from 'react'
import ArticleDetail from '../artikelDetail/article-detail'

const SideBar = () => {
  const dataPost = [

    {
      image: '/public/image4/topPost1.jpg',
      title: 'How to Spend the Perfect Day on Croatia’s Most Magical Island',
      subhead: 'Subhead',
    },

    {
      image: '/public/image4/topPost2.jpg',
      title: 'How to Spend the Perfect Day on Croatia’s Most Magical Island',
      subhead: 'Subhead',
    },

    {
      image: '/public/image4/topPost3.jpg',
      title: 'How to Spend the Perfect Day on Croatia’s Most Magical Island',
      subhead: 'Subhead',
    },

    {
      image: '/public/image4/topPost4.jpg',
      title: 'How to Spend the Perfect Day on Croatia’s Most Magical Island',
      subhead: 'Subhead',
    },

    {
      image: '/public/image4/topPost5.jpg',
      title: 'How to Spend the Perfect Day on Croatia’s Most Magical Island',
      subhead: 'Subhead',
    },

  ]

  return (

    <div className="flex flex-col-reverse lg:flex-row-reverse p-1 max-w-[1840px] mx-auto">
      <aside className="w-full lg:w-1/3 flex flex-col items-center gap-6">


        <div className="flex flex-col gap-3 md:flex-row lg:flex-col">

          {/* Setting */}
          <div className="order-2 md:order-1">
            <div className="flex flex-col gap-4 w-[100%] md:w-[510px] lg:w-[360px]">


              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2 bg-[#F5F5F5] w-[101px] h-[40px] rounded-xl text-[#5F5F5F] text-sm font-medium">✈️ Share</div>
                <div className="flex items-center justify-center gap-2 bg-[#F5F5F5] w-[108px] h-[40px] rounded-xl text-[#5F5F5F] text-sm font-medium">📌 Marking</div>
                <div className="flex items-center justify-center gap-2 bg-[#F5F5F5] w-[116px] h-[40px] rounded-xl text-[#5F5F5F] text-sm font-medium">💬 Comment</div>
              </div>


              {/* Profile */}
              <div className="bg-[#F5F5F5] rounded-xl p-4 flex items-center mt-0 gap-4 h-[117px]">
                <img src="/image4/author.jpg" alt="Author" className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex flex-col justify-center">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold text-sm mr-[60px] md:mr-[200px] lg:mr-[60px]">Louis Hoebregts</p>
                    <span className="text-xs text-gray-500 ">27 post</span>
                  </div>
                  <button className="mt-5 w-fit px-4 py-1 bg-[#FF4F7B] text-white rounded-xl text-sm font-medium flex items-center gap-1">
                    <span className="text-lg">＋</span> Follow
                  </button>
                </div>
              </div>

            </div>
          </div>


          {/* tags */}
          <div className="order-1 md:order-2 lg:order-3 w-full md:w-auto lg:w-full">
            <div className="bg-[#F5F5F5] rounded-xl p-4 w-[360px] h-full md:max-w-[214px] md:max-h-[182px] lg:max-w-[360px] lg:h-full">
              <h3 className="font-semibold mb-2 text-xl"><span className="bg-red-600 text-red-600 rounded-full text-xs">*</span> Tags</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <h6 className="text-[12px] px-1 py-1 font-medium rounded text-[#3E3232BF]">Montenegro</h6>
                <h6 className="text-[12px] px-1 py-1 font-medium rounded text-[#3E3232BF]">Visit Croatia</h6>
                <h6 className="text-[12px] px-1 py-1 font-medium rounded text-[#3E3232BF]">Luxury Travel</h6>
                <h6 className="text-[12px] px-1 py-1 font-medium rounded text-[#3E3232BF]">Travel Log</h6>
                <h6 className="text-[12px] px-1 py-1 font-medium rounded text-[#3E3232BF]">Paradise Island</h6>
                <h6 className="text-[12px] px-1 py-1 font-medium rounded text-[#3E3232BF]">Travel Info</h6>
              </div>
            </div>
          </div>

        </div>


        {/* toppost */}
        <div className="hidden lg:block bg-[#F5F5F5] rounded-xl p-4 w-[360px] h-[598px] mt-0">
          <h3 className="font-semibold mb-5 text-xl"><span className="bg-red-600 text-red-600 rounded-full text-xs">*</span> Top Post</h3>

          {dataPost.map((post, index) => (
            <div key={index} className="flex items-start gap-3 mb-4">
              <img src={post.image} className="w-[87px] h-[87px] rounded-xl object-cover flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm leading-tight mt-4">{post.title}</p>
                <p className="text-sm mt-1 text-[#3E3232BF]">{post.subhead}</p>
              </div>
            </div>
          ))}
        </div>


        {/* Ads */}
        <div className="flex flex-col md:flex-row lg:flex-col gap-4">
          <div className="relative w-[360px] h-[180px] rounded-xl overflow-hidden shadow-md group">
            <img src="/image4/ads1.jpg" className="absolute inset-0 w-full h-full object-cover blur-sm group-hover:blur-0 transition-all duration-300" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <div className="text-lg font-semibold">Advertising</div>
              <h6 className="text-sm">360 Px * 180 Px</h6>
            </div>
          </div>

          <div className="hidden md:block relative w-[360px] h-[180px] rounded-xl overflow-hidden shadow-md group">
            <img src="/image4/ads2.jpg" className="absolute inset-0 w-full h-full object-cover blur-sm group-hover:blur-0 transition-all duration-300" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <div className="text-lg font-semibold">Advertising</div>
              <h6 className="text-sm">360 Px * 180 Px</h6>
            </div>
          </div>
        </div>

      </aside>



      {/* sigma mewing*/}
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-6 p-4 max-w-7xl mx-auto">
        <main className="w-full lg:w-2/3 flex flex-col items-center gap-6">
          <ArticleDetail />
        </main>
      </div>

    </div>
  );
};



export default SideBar;