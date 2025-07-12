import React, { useState } from 'react';
import { AdminProvider } from '../context/AdminContext';
import AdminHeader from '../components/AdminHeader';
import AdminNavigation from '../components/AdminNavigation';
import UserManagement from '../components/UserManagement';
import OrderManagement from '../components/OrderManagement';
import ListingManagement from '../components/ListingManagement';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('users');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'listings':
        return <ListingManagement />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <AdminProvider>
      <div className="min-h-screen bg-gray-900">
        <AdminHeader />
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          <AdminNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          {renderActiveTab()}
        </main>
      </div>
    </AdminProvider>
  );
};

export default AdminPanel;