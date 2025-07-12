import React from 'react';
import Header from '../components/Header';
import ProductImageGallery from '../components/ProductImageGallery';
import ProductInfo from '../components/ProductInfo';
import { mockProduct, mockImages } from '../data/mockProduct';

function ProductDetail() {
  const handleBack = () => {
    // In a real app, this would navigate back to the previous page
    console.log('Navigate back');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onBack={handleBack} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Image Gallery */}
          <div className="order-2 lg:order-1">
            <ProductImageGallery 
              images={mockImages} 
              productName={mockProduct.name} 
            />
          </div>
          
          {/* Right Column - Product Information */}
          <div className="order-1 lg:order-2">
            <ProductInfo product={mockProduct} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;