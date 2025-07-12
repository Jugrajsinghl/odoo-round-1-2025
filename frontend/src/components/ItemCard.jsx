import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin } from 'lucide-react';

export function ItemCard({ item, showActions = true }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="relative">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        {showActions && (
          <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        )}
        <div className="absolute bottom-2 left-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            item.condition === 'new' ? 'bg-green-100 text-green-800' :
            item.condition === 'like-new' ? 'bg-blue-100 text-blue-800' :
            item.condition === 'good' ? 'bg-yellow-100 text-yellow-800' :
            'bg-orange-100 text-orange-800'
          }`}>
            {item.condition}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-emerald-600">{item.pointValue} points</span>
          <span className="text-sm text-gray-500">Size {item.size}</span>
        </div>
        
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{item.location || 'Location not specified'}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">by {item.uploaderName}</span>
          <Link
            to={`/item/${item.id}`}
            className="bg-emerald-600 text-white px-3 py-1 rounded-md text-sm hover:bg-emerald-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
