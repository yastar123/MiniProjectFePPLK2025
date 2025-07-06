import { Calendar, User, Tag, ArrowLeft, Share2, Bookmark, Heart } from "lucide-react"

const ArticleDetail = () => {
  return (
    <div className="w-full bg-white">
      {/* Header Image Section */}
      <div className="relative h-96 md:rounded-lg overflow-hidden">
        <img src="/src/assets/kapal.png" alt="Croatia Island Kayaking" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Back Button */}
        <button className="absolute top-6 left-6 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
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
            <span>Aug 14, 2022</span>
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-2" />
            <span>By James</span>
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-2" />
            <span>Category: Travel</span>
          </div>
        </div>

        {/* Article Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
          How to Spend the Perfect Day on Croatia's Most Magical Island
        </h1>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don't Wait, The Purpose Of Our Lives Is To Be Happy!
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Upon arrival, you witness will be rewarded with the pleasant scent of lemongrass oil used to clean the
            natural wood found throughout the room, creating a relaxing atmosphere within the space.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I
            enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for
            the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.
          </p>

          {/* Middle Image Section */}
          <div className="my-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="/src/assets/selancar.png" alt="Colorful Surfboards" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Not How Long, But How Well You Have Lived Is The Main Thing
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            When you are ready to indulge your senses of excitement, check out the range of water sports opportunities
            at the resort's six-slip water sports center, such as boat and sailing on the lagoon? Or spend lazy hours,
            paddleboarding on the lake by private boat.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Snorkeling equipment is available as well, so you can experience the ever-changing undersea environment.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            And why go without a visit and breakfast at a certified restaurant on the island? Why not visiting the new
            restaurant for special packages are available in other hotel settings, bed and breakfasts can partner easily
            with local businesses for a smoothly organized and truly personalized vacation experience. The fish and corn
            rice dishes such as fish tacos or grilled salads, that include sustainable local ingredients, and
            attractions to historic architecture, attractions, and artisans that are breathless also have themselves to
            convince.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Best of the cuisine of a bed and breakfast is the uniqueness, art, decor, and food are integrated to create
            a complete experience. For example, the fire and clean waters the colonial feel of the area in a 18 th guest
            rooms, special features include antique furnishings, elegant four poster beds in some guest rooms, as well
            folk art are reflected from the surrounding area of the historical architecture for guests to enjoy.
          </p>
        </div>

        {/* Related Articles */}
        
        </div>
      </div>
  )
}

export default ArticleDetail
