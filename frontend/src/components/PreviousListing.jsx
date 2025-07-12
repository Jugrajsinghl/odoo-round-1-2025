import React from 'react';
import { Eye, Heart, MessageCircle, MoreHorizontal, Edit, Trash2 } from 'lucide-react';



const PreviousListings = ({ listings }) => {

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'swapped': return 'bg-gray-500';
      case 'pending': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'available': return 'Available';
      case 'swapped': return 'Swapped';
      case 'pending': return 'Pending';
      default: return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Previous Listings</h2>
        <span className="text-sm text-gray-400">{listings.length} items</span>
      </div>

      {listings.length === 0 ? (
        <div className="bg-gray-800 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <Eye className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No previous listings</h3>
          <p className="text-gray-400">Your listed items will appear here once you start sharing your wardrobe.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-2xl overflow-hidden group hover:bg-gray-750 transition-colors">
              {/* Image */}
              <div className="relative aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(item.status)}`}>
                    {getStatusText(item.status)}
                  </span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-medium text-white truncate">{item.name}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-blue-400 font-semibold">{item.points} pts</span>
                    <span className="text-xs text-gray-400">{item.postedDate}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{item.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{item.messages}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  <button className="flex-1 flex items-center justify-center space-x-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded-lg text-sm transition-colors">
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg text-sm transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PreviousListings;