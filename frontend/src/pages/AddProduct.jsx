import React, { useState } from 'react';
import Header from '../components/Header';
import ImageUpload from '../components/ImageUpload';
import ProductForm from '../components/ProductForm';
import PreviousListings from '../components/PreviousListing';
import { mockPreviousListings } from '../data/mockListing';
import { Save, Eye } from 'lucide-react';





const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    description: '',
    category: '',
    size: '',
    condition: '',
    color: '',
    material: '',
    points: 100,
    location: ''
  });

  const handleBack = () => {
    console.log('Navigate back');
  };

  const handleSave = () => {
    console.log('Save product:', { images, formData });
    // Here you would typically send the data to your backend
  };

  const handlePreview = () => {
    console.log('Preview product:', { images, formData });
    // Here you would show a preview of how the product will look
  };

  const isFormValid = () => {
    return (
      images.length > 0 &&
      formData.name.trim() !== '' &&
      formData.description.trim() !== '' &&
      formData.category !== '' &&
      formData.size !== '' &&
      formData.condition !== ''
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onBack={handleBack} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Add New Product</h1>
          <p className="text-gray-400">Share your unused clothing with the ReWear community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Image Upload */}
          <div className="space-y-6">
            <ImageUpload onImagesChange={setImages} />
          </div>
          
          {/* Right Column - Product Form */}
          <div className="space-y-6">
            <ProductForm onFormChange={setFormData} />
            
            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handlePreview}
                disabled={!isFormValid()}
                className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 text-white py-4 rounded-xl font-semibold border border-gray-700 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Eye className="w-5 h-5" />
                <span>Preview</span>
              </button>
              <button
                onClick={handleSave}
                disabled={!isFormValid()}
                className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
              >
                <Save className="w-5 h-5" />
                <span>List Item</span>
              </button>
            </div>
          </div>
        </div>

        {/* Previous Listings Section */}
        <div className="border-t border-gray-800 pt-12">
          <PreviousListings listings={mockPreviousListings} />
        </div>
      </main>
    </div>
  );
};

export default AddProduct;