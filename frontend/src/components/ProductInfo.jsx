import React from 'react';
import { Heart, Share2, MapPin, Calendar, Tag, Users } from 'lucide-react';




const ProductInfo = ({ product }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className="space-y-8">
      {/* Product Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <p className="text-lg text-gray-300">{product.brand}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-3 rounded-full border transition-all duration-200 ${
                isLiked
                  ? 'bg-red-500 border-red-500 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-red-500 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button className="p-3 rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all duration-200">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Points Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold">
          <Tag className="w-4 h-4 mr-2" />
          {product.points} Points
        </div>
      </div>

      {/* Product Details */}
      <div className="bg-gray-800 rounded-2xl p-6 space-y-6">
        <h2 className="text-xl font-semibold text-white">Product Details</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">Size</p>
            <p className="text-white font-medium">{product.size}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">Condition</p>
            <p className="text-white font-medium">{product.condition}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">Category</p>
            <p className="text-white font-medium">{product.category}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">Color</p>
            <p className="text-white font-medium">{product.color}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">Material</p>
            <p className="text-white font-medium">{product.material}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">Posted</p>
            <p className="text-white font-medium">{product.postedDate}</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-white font-semibold">Description</h3>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-300 leading-relaxed">{product.description}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{product.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="w-4 h-4" />
            <span>{product.likes} likes</span>
          </div>
        </div>
      </div>

      {/* Owner Info */}
      <div className="bg-gray-800 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-white">Owner</h2>
        
        <div className="flex items-center space-x-4">
          <img
            src={product.owner.avatar}
            alt={product.owner.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
          />
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg">{product.owner.name}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <span>⭐ {product.owner.rating}/5</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{product.owner.swaps} swaps</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]">
          Request to Swap
        </button>
        <button className="w-full bg-gray-800 text-white py-4 rounded-xl font-semibold text-lg border border-gray-700 hover:bg-gray-700 transition-all duration-200">
          Message Owner
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;