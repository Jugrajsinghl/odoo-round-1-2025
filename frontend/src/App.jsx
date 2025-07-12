import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/NavBar';
import { LandingPage } from './pages/LandingPage';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { BrowseItems } from './pages/BrowseItems';
import { ItemDetail } from './pages/ItemDetails';
import { AddItem } from './pages/AddItem';
import { AdminPanel } from './pages/AdminPanel';
<<<<<<< HEAD
import Register from './pages/Register';
import Login from './pages/Login';
=======
import ProductDetail from './pages/ProductDetail';
>>>>>>> 321162a09fc81506515fad493a8a82a7b78dbad1

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/login" element={<Auth mode="login" />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signup" element={<Auth mode="signup" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/browse" element={<BrowseItems />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin" element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;