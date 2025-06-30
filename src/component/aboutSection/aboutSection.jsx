import React from 'react';

export default function AboutSection() {
    return (
        <div className=" p-8 lg:p-16 ">
            <div className="max-w-7xl p-6 px-8 rounded mx-auto bg-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                            We pay attention to your needs and do the best design.
                        </h2>

                        <div className="text-gray-600 text-sm lg:text-base leading-relaxed space-y-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>

                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                                error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo.
                            </p>

                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                sed quia consequuntur magna dolores eos qui ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                                labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Video/Image */}
                    <div className="relative">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            {/* Background gradient to simulate space image */}
                            <div className="aspect-video bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative">
                                {/* Stars effect */}
                                <div className="absolute inset-0 opacity-60">
                                    <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full"></div>
                                    <div className="absolute top-12 right-12 w-1 h-1 bg-white rounded-full"></div>
                                    <div className="absolute top-20 left-16 w-0.5 h-0.5 bg-white rounded-full"></div>
                                    <div className="absolute bottom-16 right-8 w-1 h-1 bg-white rounded-full"></div>
                                    <div className="absolute bottom-8 left-12 w-0.5 h-0.5 bg-white rounded-full"></div>
                                    <div className="absolute top-8 right-20 w-0.5 h-0.5 bg-white rounded-full"></div>
                                    <div className="absolute bottom-12 right-16 w-0.5 h-0.5 bg-white rounded-full"></div>
                                    <div className="absolute top-16 left-20 w-0.5 h-0.5 bg-white rounded-full"></div>
                                </div>

                                {/* Nebula-like effects */}
                                <div className="absolute top-8 right-8 w-24 h-24 bg-pink-500 rounded-full opacity-20 blur-xl"></div>
                                <div className="absolute bottom-12 left-12 w-32 h-32 bg-purple-400 rounded-full opacity-15 blur-2xl"></div>

                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300">
                                        <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
                                            <div className="w-0 h-0 border-l-4 lg:border-l-6 border-l-white border-y-2 lg:border-y-4 border-y-transparent ml-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}