import React from 'react';
import { Users, Package, ShoppingCart } from 'lucide-react';


const AdminNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'users', label: 'Manage Users', icon: Users },
    { id: 'orders', label: 'Manage Orders', icon: ShoppingCart },
    { id: 'listings', label: 'Manage Listings', icon: Package },
  ];

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === tab.id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
        >
          <tab.icon className="w-5 h-5" />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default AdminNavigation;