"use client"

import { Play } from "lucide-react"
import { useState } from "react"

const HeroAbout = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We pay attention to your needs and do the best design.
            </h1>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis consectetur adipiscing elit.
              </p>

              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.
              </p>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>

              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
              </p>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Background Image */}
              <div
                className="w-full h-80 lg:h-96 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('/src/assets/abstract.png')`,
                }}
              >
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    isHovered ? "bg-opacity-20" : "bg-opacity-30"
                  }`}
                ></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`transform transition-all duration-300 ${isHovered ? "scale-105" : "scale-100"}`}>
                    {/* Outer Ring */}
                    <div className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center">
                      {/* Inner Circle */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center shadow-lg">
                        <Play className="text-white ml-1" size={24} fill="white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAbout
