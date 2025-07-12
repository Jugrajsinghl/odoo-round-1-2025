import React, { useState } from 'react';
import { mockAdminListings } from '../data/mockAdminData';
import {
  CheckCircle,
  XCircle,
  Eye,
  Flag,
  Trash2,
  Calendar,
  Tag,
  Heart
} from 'lucide-react';

const ListingManagement = () => {
  const [listings, setListings] = useState(mockAdminListings);
  const [selectedListing, setSelectedListing] = useState(null);

  const handleListingAction = (listingId, action) => {
    if (action === 'remove') {
      setListings(listings.filter(listing => listing.id !== listingId));
    } else {
      setListings(
        listings.map(listing =>
          listing.id === listingId ? { ...listing, status: action } : listing
        )
      );
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500';
      case 'approved':
        return 'bg-green-500';
      case 'rejected':
        return 'bg-red-500';
      case 'flagged':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'approved':
        return 'Approved';
      case 'rejected':
        return 'Rejected';
      case 'flagged':
        return 'Flagged';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Manage Listings</h2>
        <span className="text-gray-400">{listings.length} total listings</span>
      </div>

      <div className="space-y-4">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex items-center space-x-6">
              <img
                src={listing.images[0]}
                alt={listing.title}
                className="w-16 h-16 rounded-lg object-cover border-2 border-gray-700"
              />

              <div className="flex-1 bg-gray-900 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{listing.title}</h3>
                    <p className="text-gray-400">{listing.brand} • {listing.category}</p>
                    {listing.status === 'flagged' && listing.flagReason && (
                      <p className="text-orange-400 text-sm mt-1">⚠ {listing.flagReason}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(listing.status)}`}>
                      {getStatusText(listing.status)}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{listing.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <img
                      src={listing.uploaderAvatar}
                      alt={listing.uploaderName}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span className="text-gray-400">{listing.uploaderName}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(listing.uploadDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Tag className="w-4 h-4" />
                    <span className="text-blue-400 font-medium">{listing.points} pts</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{listing.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{listing.likes}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setSelectedListing(listing)}
                  className="flex items-center justify-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>

                {listing.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleListingAction(listing.id, 'approve')}
                      className="flex items-center justify-center space-x-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Approve</span>
                    </button>
                    <button
                      onClick={() => handleListingAction(listing.id, 'reject')}
                      className="flex items-center justify-center space-x-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                    >
                      <XCircle className="w-4 h-4" />
                      <span>Reject</span>
                    </button>
                  </>
                )}

                {listing.status !== 'flagged' && listing.status !== 'rejected' && (
                  <button
                    onClick={() => handleListingAction(listing.id, 'flag')}
                    className="flex items-center justify-center space-x-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                  >
                    <Flag className="w-4 h-4" />
                    <span>Flag</span>
                  </button>
                )}

                <button
                  onClick={() => handleListingAction(listing.id, 'remove')}
                  className="flex items-center justify-center space-x-1 bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedListing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Listing Details</h3>
              <button
                onClick={() => setSelectedListing(null)}
                className="text-gray-400 hover:text-white"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img
                  src={selectedListing.images[0]}
                  alt={selectedListing.title}
                  className="w-full aspect-square rounded-lg object-cover"
                />
                {selectedListing.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2">
                    {selectedListing.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedListing.title} ${index + 2}`}
                        className="aspect-square rounded-lg object-cover"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{selectedListing.title}</h4>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(selectedListing.status)}`}>
                      {getStatusText(selectedListing.status)}
                    </span>
                    <span className="text-blue-400 font-semibold">{selectedListing.points} points</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{selectedListing.description}</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-3">Item Details</h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">Brand:</span>
                      <span className="text-white ml-2">{selectedListing.brand}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white ml-2">{selectedListing.category}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Condition:</span>
                      <span className="text-white ml-2">{selectedListing.condition}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Upload Date:</span>
                      <span className="text-white ml-2">{new Date(selectedListing.uploadDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-3">Uploader</h5>
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedListing.uploaderAvatar}
                      alt={selectedListing.uploaderName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white font-medium">{selectedListing.uploaderName}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{selectedListing.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{selectedListing.likes} likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedListing.status === 'flagged' && selectedListing.flagReason && (
                  <div className="bg-orange-900 border border-orange-600 rounded-lg p-4">
                    <h5 className="font-semibold text-orange-200 mb-2">Flag Reason</h5>
                    <p className="text-orange-300">{selectedListing.flagReason}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingManagement;
