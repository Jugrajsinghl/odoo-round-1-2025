
import { Search, User, ArrowLeft } from 'lucide-react';


export default function Header({ onBack }) {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto">
        {/* Browser-like top bar */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="bg-gray-800 rounded px-3 py-1 text-sm text-gray-300 ml-4">
              rewear.app/product/vintage-denim-jacket
            </div>
          </div>
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-300" />
          </div>
        </div>

        {/* Search bar */}
        <div className="relative">
          <div className="flex items-center space-x-4">
            {onBack && (
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for clothing, brands, or styles..."
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

