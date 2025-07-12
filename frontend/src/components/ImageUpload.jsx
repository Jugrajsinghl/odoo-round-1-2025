import React, { useState, useRef } from 'react';
import { Upload, X, Camera, Image as ImageIcon } from 'lucide-react';





const ImageUpload = ({ onImagesChange }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    if (!files) return;

    const newImages = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const id = Math.random().toString(36).substr(2, 9);
        const preview = URL.createObjectURL(file);
        newImages.push({ id, file, preview });
      }
    });

    const updatedImages = [...uploadedImages, ...newImages].slice(0, 6); // Max 6 images
    setUploadedImages(updatedImages);
    onImagesChange(updatedImages);
  };

  const removeImage = (id) => {
    const updatedImages = uploadedImages.filter(img => img.id !== id);
    setUploadedImages(updatedImages);
    onImagesChange(updatedImages);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  return (
    <div className="space-y-6">
      {/* Main Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-2xl p-8 transition-all duration-200 ${
          isDragOver
            ? 'border-blue-500 bg-blue-500 bg-opacity-10'
            : 'border-gray-600 hover:border-gray-500'
        } ${uploadedImages.length === 0 ? 'h-80' : 'h-48'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
        />
        
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-gray-400" />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2">Add Images</h3>
          <p className="text-gray-400 mb-6 max-w-sm">
            Drag and drop your images here, or click to browse. Add up to 6 photos to showcase your item.
          </p>
          
          <div className="flex space-x-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ImageIcon className="w-5 h-5" />
              <span>Browse Files</span>
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
            >
              <Camera className="w-5 h-5" />
              <span>Take Photo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Uploaded Images Grid */}
      {uploadedImages.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Uploaded Images ({uploadedImages.length}/6)</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {uploadedImages.map((image, index) => (
              <div key={image.id} className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-800">
                  <img
                    src={image.preview}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => removeImage(image.id)}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
                {index === 0 && (
                  <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Main
                  </div>
                )}
              </div>
            ))}
            
            {/* Add More Button */}
            {uploadedImages.length < 6 && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="aspect-square rounded-lg border-2 border-dashed border-gray-600 hover:border-gray-500 flex items-center justify-center transition-colors group"
              >
                <div className="text-center">
                  <Upload className="w-8 h-8 text-gray-400 group-hover:text-gray-300 mx-auto mb-2" />
                  <span className="text-sm text-gray-400 group-hover:text-gray-300">Add More</span>
                </div>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;