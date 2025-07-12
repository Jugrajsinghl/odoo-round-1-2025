import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { User, LogOut, Settings } from 'lucide-react';

const AdminHeader = () => {
  const { adminUser, logoutAdmin } = useAdmin();

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
              rewear.app/admin
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">
              {adminUser?.name} ({adminUser?.role})
            </span>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
            </button>
            <button 
              onClick={logoutAdmin}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Admin Panel Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;