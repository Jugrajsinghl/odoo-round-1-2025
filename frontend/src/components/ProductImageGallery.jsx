import React, { useState } from 'react';


const ProductImageGallery = ({ images, productName }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Main Product Image */}
      <div className="relative bg-gray-800 rounded-2xl overflow-hidden aspect-square">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        )}
        <img
          src={images[selectedImageIndex]?.url}
          alt={images[selectedImageIndex]?.alt || productName}
          className="w-full h-full object-cover transition-opacity duration-300"
          onLoad={handleImageLoad}
          style={{ opacity: isLoading ? 0 : 1 }}
        />
        
        {/* Image indicator */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {selectedImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-300">Product Images</h3>
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === selectedImageIndex
                  ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-30'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {index === selectedImageIndex && (
                <div className="absolute inset-0 bg-blue-500 bg-opacity-20"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;