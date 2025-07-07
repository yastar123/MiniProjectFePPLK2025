import { Calendar, User, Tag, ArrowLeft, Share2, Bookmark, Heart } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom";

const ArticleDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  if (!post) return <div className="text-center py-10">Data tidak ditemukan.</div>;

  return (
    <div className="w-full bg-white">
      {/* Header Image Section */}
      <div className="relative h-96 md:rounded-lg overflow-hidden">
        <img src={post.urlToImage || "/src/assets/kapal.png"} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="absolute top-6 left-6 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <ArrowLeft size={20} className="text-gray-700" />
        </button>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex space-x-3">
          <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <Share2 size={20} className="text-gray-700" />
          </button>
          <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <Bookmark size={20} className="text-gray-700" />
          </button>
          <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <Heart size={20} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto p-2 md:px-6 md:py-8">
        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-2" />
            <span>By {post.author || "Unknown Author"}</span>
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-2" />
            <span>Source: {post.source?.name || "Unknown Source"}</span>
          </div>
        </div>

        {/* Article Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
          {post.title}
        </h1>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">{post.description}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
        </div>

        {/* Middle Image Section */}
        {post.urlToImage && (
          <div className="my-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={post.urlToImage} alt={post.title} className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        )}

        {/* Link ke sumber asli */}
        {post.url && (
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Baca di sumber asli</a>
        )}
      </div>
    </div>
  )
}

export default ArticleDetail
