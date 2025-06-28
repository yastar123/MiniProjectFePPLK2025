import React from "react";

const PopularPost = () => {
    const dataPost = [
       
        {
        image: '/image/image1.jpg',
        title: 'Opening Day of Boating Season, Seattle WA',
        body: 'Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge',
        author: './image/author1.jpg',
        name: 'James',
        date: 'August 18 , 2022',
        },

        {
        image: '/image/image2.jpg',
        title: 'How to choose the right laptop for programming',
        body: 'Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs',
        author: './image/author2.jpg',
        name: 'Louis Hoebregts',
        date: 'July 25 , 2022',
        },

        {
        image: '/image/image3.jpg',
        title: 'How we built the first real self-driving car',
        body: 'Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when',
        author: './image/author3.jpg',
        name: 'Mary',
        date: 'July 14 , 2022',
        },

        {
        image: '/image/image4.jpg',
        title: 'How to Persuade Your Parents to Buy Fast Food',
        body: 'Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.',
        author: './image/author4.jpg',
        name: 'Jon Kantner',
        date: 'May 10 , 2022',
        },

    ];

    return (
        // judul + button
        <div className="flex my-10 md:my-16 flex-col items-center justify-center">

            {/* responsive1 */}
        <div className="relative w-full max-w-[90rem] mx-auto p-1 lg:w-[100%]">

            <h2 className="text-2xl font-semibold mb-5"><span className="bg-red-600 text-red-600 rounded-full">*</span> Popular posts</h2>

            <div className="absolute right-4 top-0 flex gap-2">
                <button className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                <span className="text-xl">{'<'}</span>
                </button>
                <button className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                <span className="text-xl">{'>'}</span>
                </button>
            </div>


        {/* // card */}
        <div className="flex flex-wrap gap-14 justify-center">
        
        {dataPost.map((post, index) => (
            // responsive2
            <div key={index} className="rounded-xl shadow-md border-[1px] p-2 w-full max-width-[] sm:w-[640px] md:w-[720px] lg:w-[21%] ">

                <img src={post.image} className="w-full h-40 object-fill rounded-lg mb-3" />
                <h3 className="font-bold mb-3">{post.title}</h3>
                <p className="text-sm line-clamp-2">{post.body}</p>

                {/* bookmark */}
                <div className="flex items-center justify-between mt-3 bg-gray-100 rounded-md">
                <div className="flex items-center gap-3 p-3">
                <img src={post.author} className="w-8 h-8 rounded-xl"/>
                <div>
                    <p className="text-sm font-semibold">{post.name}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                </div>
                </div>

                <div className="w-4 mr-3">
                <img src="/image/bookmark.png" />
                </div>

                </div>

            </div>
        ))}
        </div>
        </div>
        </div>
  );
};

export default PopularPost;
