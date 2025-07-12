import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context without TypeScript types
const AuthContext = createContext(undefined);

// Mock users for demonstration
const mockUsers = [
  {
    id: '1',
    email: 'user@example.com',
    name: 'Sarah Johnson',
    points: 150,
    isAdmin: false,
    joinedAt: '2024-01-15',
  },
  {
    id: '2',
    email: 'admin@rewear.com',
    name: 'Admin User',
    points: 0,
    isAdmin: true,
    joinedAt: '2024-01-01',
  },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('rewear_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('rewear_user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (email, password, name) => {
    const newUser = {
      id: Date.now().toString(),
      email,
      name,
      points: 100,
      isAdmin: false,
      joinedAt: new Date().toISOString().split('T')[0],
    };
    mockUsers.push(newUser);
    setUser(newUser);
    localStorage.setItem('rewear_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rewear_user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to access AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}