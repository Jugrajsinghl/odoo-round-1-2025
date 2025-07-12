import React, { useState } from 'react';
import { Tag, MapPin, Calendar } from 'lucide-react';





const ProductForm = ({ onFormChange }) => {
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

  const handleChange = (field, value) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    onFormChange(updatedData);
  };

  const categories = [
    'Tops & T-Shirts', 'Jackets & Coats', 'Dresses', 'Pants & Jeans', 
    'Skirts', 'Shoes', 'Accessories', 'Activewear', 'Formal Wear', 'Other'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size'];
  const conditions = ['Like New', 'Excellent', 'Good', 'Fair'];

  return (
    <div className="bg-gray-800 rounded-2xl p-6 space-y-6">
      <h2 className="text-xl font-semibold text-white mb-6">Add Product Description</h2>
      
      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Product Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="e.g., Vintage Denim Jacket"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Brand</label>
          <input
            type="text"
            value={formData.brand}
            onChange={(e) => handleChange('brand', e.target.value)}
            placeholder="e.g., Levi's, H&M, Zara"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Description *</label>
        <textarea
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Describe your item in detail. Include any special features, styling tips, or reasons for selling..."
          rows={6}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
        />
        <p className="text-xs text-gray-500">Be detailed to attract more swappers!</p>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Category *</label>
          <select
            value={formData.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="">Select category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Size *</label>
          <select
            value={formData.size}
            onChange={(e) => handleChange('size', e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="">Select size</option>
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Condition *</label>
          <select
            value={formData.condition}
            onChange={(e) => handleChange('condition', e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="">Select condition</option>
            {conditions.map(condition => (
              <option key={condition} value={condition}>{condition}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Color</label>
          <input
            type="text"
            value={formData.color}
            onChange={(e) => handleChange('color', e.target.value)}
            placeholder="e.g., Navy Blue, Black, Red"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Material</label>
          <input
            type="text"
            value={formData.material}
            onChange={(e) => handleChange('material', e.target.value)}
            placeholder="e.g., 100% Cotton, Polyester Blend"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Points and Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 flex items-center space-x-2">
            <Tag className="w-4 h-4" />
            <span>Points Value *</span>
          </label>
          <div className="relative">
            <input
              type="number"
              value={formData.points}
              onChange={(e) => handleChange('points', parseInt(e.target.value) || 0)}
              min="50"
              max="500"
              step="25"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              pts
            </div>
          </div>
          <p className="text-xs text-gray-500">Suggested: 50-200 points based on item value</p>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Location</span>
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="e.g., San Francisco, CA"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Availability Toggle */}
      <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
        <div>
          <h3 className="text-white font-medium">Available for Swap</h3>
          <p className="text-sm text-gray-400">Make this item visible to other users</p>
        </div>
        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductForm;