import React, { createContext, useContext, useState } from 'react';

// Create context with default value null
const AdminContext = createContext(null);

// Custom hook to access context
export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === null) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

// Provider component
export const AdminProvider = ({ children }) => {
  // Mock admin user
  const [adminUser] = useState({
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@rewear.com',
    role: 'admin',
  });

  // Placeholder login function
  const loginAdmin = (userData) => {
    console.log('Admin Login:', userData);
  };

  // Placeholder logout function
  const logoutAdmin = () => {
    console.log('Admin Logout');
  };

  return (
    <AdminContext.Provider value={{ adminUser, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
