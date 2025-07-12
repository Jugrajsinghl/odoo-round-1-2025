import React, { useState } from 'react';
import { mockItems } from '../data/mockItems';
import { ItemCard } from '../components/ItemCard';
import { Search, Filter } from 'lucide-react';

export function BrowseItems() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['tops', 'bottoms', 'dresses', 'outerwear', 'shoes', 'accessories'];
  const conditions = ['new', 'like-new', 'good', 'fair'];

  const filteredItems = mockItems
    .filter(item => item.isApproved)
    .filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(item => selectedCategory === '' || item.category === selectedCategory)
    .filter(item => selectedCondition === '' || item.condition === selectedCondition)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.pointValue - b.pointValue;
        case 'price-high':
          return b.pointValue - a.pointValue;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Items</h1>
          <p className="text-gray-600">Discover amazing clothing items from our community</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search */}
            <div className="md:col-span-6">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            {/* <div className="md:col-span-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div> */}

            {/* Condition Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">All Conditions</option>
                {conditions.map(condition => (
                  <option key={condition} value={condition}>
                    {condition.charAt(0).toUpperCase() + condition.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-low">Points: Low to High</option>
                <option value="price-high">Points: High to Low</option>
              </select>
            </div>

            {/* Clear Filters */}
            <div className="md:col-span-2">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setSelectedCondition('');
                  setSortBy('newest');
                }}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-4 w-4 mr-2" />
                Clear
              </button>
            </div>


          </div>
        </div>



            {/* ------------------------------------------------- */}
            {/* Category Filter Buttons */}
{/* Category Filter Cards with Pexels URLs */}
<div className="mb-6">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {[
      {
        key: '',
        label: 'All Categories',
        image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        key: 'tops',
        label: 'Tops',
        image: 'https://images.pexels.com/photos/6311587/pexels-photo-6311587.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        key: 'bottoms',
        label: 'Bottoms',
        image: 'https://images.pexels.com/photos/9779653/pexels-photo-9779653.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        key: 'dresses',
        label: 'Dresses',
        image: 'https://images.pexels.com/photos/2748535/pexels-photo-2748535.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        key: 'outerwear',
        label: 'Outerwear',
        image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        key: 'shoes',
        label: 'Shoes',
        image: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        key: 'accessories',
        label: 'Accessories',
        image: 'https://images.pexels.com/photos/989855/pexels-photo-989855.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        key: 'others',
        label: 'Others',
        image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ].map(({ key, label, image }) => (
      <div
        key={key || 'all'}
        onClick={() => setSelectedCategory(key)}
        className={`relative h-24 rounded-lg cursor-pointer overflow-hidden group border-2 transition-all ${
          selectedCategory === key ? 'border-emerald-600' : 'border-transparent'
        }`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-lg font-semibold drop-shadow">{label}</span>
        </div>
      </div>
    ))}
  </div>
</div>




        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredItems.length} of {mockItems.filter(item => item.isApproved).length} items
          </p>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <div className="mb-4">
              <Search className="h-12 w-12 text-gray-400 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSelectedCondition('');
              }}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
