import { Bookmark } from 'lucide-react';
import gambar1 from '../../assets/img/newpost/gambar1.png';
import JonKantner from '../../assets/img/newpost/let1.png';
import gambar2 from '../../assets/img/newpost/gambar2.png';
import James from '../../assets/img/newpost/let2.png';
import gambar3 from '../../assets/img/newpost/gambar3.png';
import Linda from '../../assets/img/newpost/let3.png';
import gambar4 from '../../assets/img/newpost/gambar4.png';
import LouisHoebregts from '../../assets/img/newpost/let4.png';
import gambar5 from '../../assets/img/newpost/gambar5.png';
import CassieEvans from '../../assets/img/newpost/let5.png';
import gambar6 from '../../assets/img/newpost/gambar6.png';
import Patricia from '../../assets/img/newpost/let6.png';

const NewPosts = () => {
  const posts = [
    {
      id: 1,
      title: '12 Mobile UX Design Trends For 2018',
      description: 'Things Move Quickly In The Mobile App Universe. To Succeed In The Field Of Mobile UX Design, Designers...',
      author: 'Jon Kantner',
      image: gambar1,
      date: 'July 14, 2022',
      avatar: JonKantner,
    },
    {
      id: 2,
      title: 'No Boat Bottomfish: Jetty Fishing On The...',
      description: 'Cast From The Rocks To Bring Home Fresh Fish Tacos In This Iconic Spring And Summer Fishery. — Are You...',
      image: gambar2,
      author: 'Louis Hoebregts',
      date: 'July 13, 2022',
      avatar: LouisHoebregts,
    },
    {
      id: 3,
      title: 'What A Disabled Squirrel Taught Me About Life...',
      description: "Why It Helps To Know What It's Like And The Exquisite Beauty Of Empathy These Days, The Wood Patio Area...",
      image: gambar3,
      author: 'James',
      date: 'July 12, 2022',
      avatar: James,
    },
    {
      id: 4,
      title: 'Becoming A Self-Driving Car & Machine Learning...',
      description: 'How I Left My Full-Time Job, Studied At Udacity, And Landed A Job At BMW The Past Year Has Been Quite...',
      image: gambar4,
      author: 'Cassie Evans',
      date: 'July 12, 2022',
      avatar: CassieEvans,
    },
    {
      id: 5,
      title: 'How To Become A Master Designer',
      description: 'Many Outsiders Believe That Designers Are Unicorns, Gifted Or Special In Some Way. We Have An Innate...',
      image: gambar5,
      author: 'Linda',
      date: 'July 10, 2022',
      avatar: Linda,
    },
    {
      id: 6,
      title: 'This Free Course Can Teach You Music...',
      description: 'A Berlin-Based Music Software Company, Just Released A Free Interactive Music Course That Runs Right In Yo...',
      image: gambar6,
      author: 'Patricia',
      date: 'July 09, 2022',
      avatar: Patricia,
    },
  ];

  return (
    <div className="max-w-7xl p-2 mx-auto mt-16 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-red-500 rounded"></div>
          <h2 className="text-2xl font-bold text-gray-900">New Posts</h2>
        </div>
        <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
          Show All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Posts Grid - 2 columns like original design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <div className="flex">
              {/* Image */}
              <div className="w-48 h-44 md:h-32 flex-shrink-0">
                <img src={post.image || '/placeholder.svg'} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">{post.description}</p>
                </div>

                {/* Author and Bookmark */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <img src={post.avatar || '/placeholder.svg'} alt={post.author} className="w-6 h-6 rounded-full object-cover" />
                    <div>
                      <p className="text-xs font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>

                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPosts;
