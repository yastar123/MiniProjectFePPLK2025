'use client';
import { useState } from 'react';
import user1 from '../../assets/img/comments/user1.png'; 
import user2 from '../../assets/img/comments/user2.png'; 
import user3 from '../../assets/img/comments/user3.png'; 
import user4 from '../../assets/img/comments/user4.png'; 

const Comments = () => {
  const [comments] = useState([
    {
      id: 1,
      name: 'Jon Kantner',
      date: '2022 04 July',
      avatar: user1, // Gunakan gambar yang diimpor
      content:
        "When You Are Ready To Indulge Your Sense Of Excitement, Check Out The Range Of Water Sports Opportunities At The Resort's On-Site Water Sports Center. Want To Leave Your Stress On The Water? The Resort Has Kayaks, Paddleboards, Or The Low-Key Pedal Boats.",
    },
    {
      id: 2,
      name: 'Cassie Evans',
      date: '2022 04 July',
      avatar: user2,
      content: 
        "A River Or A Lake Island May Be Called An Eyot Or Ait, And A Small Island Off The Coast May Be Called A Holm. Sedimentary Islands In The Ganges Delta Are Called Chars. A Grouping Of Geographically Or Geologically Related Islands, Such As The Philippines, Is Referred To As An Archipelago.",
    },
    {
      id: 3,
      name: 'Behzad Pashaei',
      date: '2022 04 July',
      avatar: user3, // Tambahkan gambar baru
      content:
        'Oceanic Islands Are Often Considered To Be Islands That Do Not Sit On Continental Shelves. Other Definitions Limit The Term To Only Refer To Islands With No Past Geological Connections To A Continental Landmass The Vast Majority Are Volcanic In Origin, Such As Saint Helena In The South Atlantic Ocean.',
    },
    {
      id: 4,
      name: 'Patricia',
      date: '2022 04 July',
      avatar: user4,
      content:
        'An Island (or Isle) Is An Isolated Piece Of Habitat That Is Surrounded By A Dramatically Different Habitat, Such As Water. Very Small Islands Such As Emergent Land Features On Atolls Can Be Called Islets, Skerries, Cays Or Keys.',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    website: '',
    email: '',
  });

  const [rating, setRating] = useState(0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'Rating:', rating);
    // Reset form
    setFormData({ name: '', comment: '', website: '', email: '' });
    setRating(0);
  };

  const handleReply = (commentId) => {
    console.log('Reply to comment:', commentId);
  };

  const ratingEmojis = ['😞', '😞', '😐', '😊', '😍'];
  const ratingColors = ['bg-red-100 text-red-600', 'bg-red-100 text-red-600', 'bg-yellow-100 text-yellow-600', 'bg-blue-100 text-blue-600', 'bg-green-100 text-green-600'];

  return (
    <div className="max-w-4xl mx-auto p-2 my-10 md:p-6 bg-white">
      {/* Comments Header */}
      <div className="flex items-center mb-8">
        <div className="w-1 h-6 bg-red-500 rounded-full mr-3"></div>
        <h2 className="text-xl font-semibold text-gray-800">Comments</h2>
      </div>

      {/* Comments List */}
      <div className="space-y-6 mb-12">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 rounded-lg p-6">
            <div className="flex gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img src={comment.avatar} alt={comment.name} className="w-12 h-12 rounded-full object-cover" />
              </div>

              {/* Comment Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{comment.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {comment.date}
                    </div>
                  </div>

                  {/* Reply Button */}
                  <button onClick={() => handleReply(comment.id)} className="flex items-center text-gray-500 hover:text-gray-700 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                    Reply
                  </button>
                </div>

                <p className="text-gray-700 leading-relaxed">{comment.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Comment Form */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-6">
          <div className="w-1 h-6 bg-red-500 rounded-full mr-3"></div>
          <h3 className="text-lg font-semibold text-gray-800">Add A Comment</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name and Website Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Comment Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Comment</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              rows={4}
              placeholder="Search Anything"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          {/* Rating and Submit Button */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Rate The Usefulness Of The Article</span>
              <div className="hidden md:flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" onClick={() => setRating(star)} className={`w-8 h-8 rounded-full text-lg transition-colors ${star <= rating ? ratingColors[star - 1] : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}>
                    {ratingEmojis[star - 1]}
                  </button>
                ))}
              </div>
              {rating === 5 && <span className="text-sm text-green-600 font-medium">Good</span>}
            </div>

            <button type="submit" className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-medium">
              Send Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
