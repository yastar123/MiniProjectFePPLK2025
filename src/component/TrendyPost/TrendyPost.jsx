import React from "react";

const TrendyPost = () => {
    const dataPost = [
       
        {
        image: '/image/image5.jpg',
        title: 'How to build a self-driving car in one month',
        body: 'Can I learn the necessary computer science to build the software part of a self-driving car in one month?',
        author: './image/author5.jpg',
        name: 'Mary',
        date: 'July 14 , 2022',
        },

        {
        image: '/image/image6.jpg',
        title: 'Self-Improvement Has Become An Extreme Sport',
        body: 'What we’re told we must do each day to develop and be successful has gone out of control. We have endless lists of habits that we’re supposed to do',
        author: './image/author6.jpg',
        name: 'James',
        date: 'July 14 , 2022',
        },

        {
        image: '/image/image7.jpg',
        title: '10 Cooking Lessons to Use in Everyday Life',
        body: 'I recently stumbled upon this quote by Paul Theroux: “Cooking requires confident guesswork and improvisation ',
        author: './image/author7.jpg',
        name: 'Jon Kantner',
        date: 'July 14 , 2022',
        },

        {
        image: '/image/image8.jpg',
        title: 'Typography can make or break your design: a process for choosing type',
        body: 'One of the most important skills you can learn as a designer is how to choose type. This is because text is one of the primary ways designers can communicate with users. Typography can make or break a design. There’s a beauty and complexity to typography. Some people devote their',
        author: './image/author8.jpg',
        name: 'Robert',
        date: 'July 14 , 2022',
        },

    ];

    return (
        // judul + button
        <div className=" flex flex-col items-center justify-center">

            {/* responsive1 */}
        <div className="relative w-full max-w-[90rem] mx-auto p-1 lg:w-[100%]">

            <h2 className="text-2xl font-semibold mb-5"><span className="bg-red-600 text-red-600 rounded-full">*</span> Trendy posts</h2>

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
            <div key={index} className="rounded-xl shadow-md border-[1px] p-2 w-full max-width-[] sm:w-[49%] md:w-[31%] lg:w-[21%] max-w-[900px] m-0">


                <img src={post.image} className="w-full h-40 object-fill rounded-lg mb-3" />
                <h3 className="font-medium mb-3 line-clamp-1">{post.title}</h3>
                <p className="text-sm line-clamp-2">{post.body}</p>

                {/* bookmark */}
                <div className="flex items-center justify-between mt-3 bg-gray-100 rounded-md">
                <div className="flex items-center gap-3 p-3">
                <img src={post.author} className="w-10 h-10 rounded-xl"/>
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

export default TrendyPost;
