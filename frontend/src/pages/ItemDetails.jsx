import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockItems } from '../data/mockItems';
import { ChevronLeft, Heart, Share2, MapPin, Star, User, MessageCircle } from 'lucide-react';

export function ItemDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [swapType, setSwapType] = useState('swap'); // Removed TS type

  const item = mockItems.find(item => item.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Item not found</h2>
          <Link to="/browse" className="text-emerald-600 hover:text-emerald-700">
            ← Back to browse
          </Link>
        </div>
      </div>
    );
  }

  const isOwner = user?.id === item.uploaderId;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/browse"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to browse
        </Link>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={item.images[currentImageIndex]}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {item.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {item.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 ${
                        currentImageIndex === index ? 'border-emerald-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${item.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Item Details */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {item.location || 'Location not specified'}
                    </span>
                    <span>{item.createdAt}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold">
                  {item.pointValue} points
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.condition === 'new' ? 'bg-green-100 text-green-800' :
                  item.condition === 'like-new' ? 'bg-blue-100 text-blue-800' :
                  item.condition === 'good' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {item.condition}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {item.isAvailable ? 'Available' : 'Not Available'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="font-medium capitalize">{item.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Size</p>
                  <p className="font-medium">{item.size}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="font-medium capitalize">{item.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Condition</p>
                  <p className="font-medium capitalize">{item.condition}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <User className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.uploaderName}</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>4.9 (23 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700">
                    <MessageCircle className="h-4 w-4" />
                    <span>Message</span>
                  </button>
                </div>
              </div>

              {!isOwner && user && item.isAvailable && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      setSwapType('swap');
                      setShowSwapModal(true);
                    }}
                    className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Request Swap
                  </button>
                  <button
                    onClick={() => {
                      setSwapType('points');
                      setShowSwapModal(true);
                    }}
                    disabled={user.points < item.pointValue}
                    className="w-full border-2 border-emerald-600 text-emerald-600 py-3 px-6 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Redeem with Points ({item.pointValue})
                  </button>
                </div>
              )}

              {!user && (
                <div className="text-center py-4">
                  <p className="text-gray-600 mb-4">Please log in to swap or redeem items</p>
                  <Link
                    to="/login"
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Log In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showSwapModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {swapType === 'swap' ? 'Request Swap' : 'Redeem with Points'}
            </h3>
            <p className="text-gray-600 mb-4">
              {swapType === 'swap'
                ? 'Send a swap request to the owner. You can offer one of your items in exchange.'
                : `You're about to redeem this item for ${item.pointValue} points. You currently have ${user?.points} points.`}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowSwapModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowSwapModal(false);
                  alert(swapType === 'swap' ? 'Swap request sent!' : 'Item redeemed successfully!');
                }}
                className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700"
              >
                {swapType === 'swap' ? 'Send Request' : 'Redeem Now'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
