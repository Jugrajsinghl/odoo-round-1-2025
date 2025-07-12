import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, Phone, MapPin, Calendar, Upload, X } from 'lucide-react';

export default function Register() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    age: 18,
    gender: '',
    email: '',
    mobileNumber: '',
    address: '',
    pincode: '',
    state: '',
    district: '',
    profilePhoto: '',
    password: ''
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePhoto') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({ ...prev, profilePhoto: reader.result }));
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (formData.age < 13) {
      setError('You must be at least 13 years old to register');
      return;
    }

    setLoading(true);
    try {
      await signup(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white p-8 rounded shadow space-y-6">
        <h2 className="text-2xl font-bold text-center text-emerald-600">Create Account</h2>

        {error && (
          <div className="text-red-600 bg-red-100 p-2 rounded text-sm flex items-center space-x-2">
            <X className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        {/* Profile Image Upload */}
        <div className="flex justify-center">
          <label className="relative w-28 h-28 cursor-pointer">
            <input
              type="file"
              name="profilePhoto"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            <div className="w-28 h-28 rounded-full border-4 border-emerald-100 overflow-hidden shadow">
              {preview ? (
                <img src={preview} alt="Profile Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-emerald-50 text-emerald-600">
                  <Upload className="w-6 h-6" />
                </div>
              )}
            </div>
          </label>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="username" placeholder="Username" onChange={handleChange} required className="border p-2 rounded" />
          <input name="firstName" placeholder="First Name" onChange={handleChange} required className="border p-2 rounded" />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} required className="border p-2 rounded" />
          <input name="age" type="number" placeholder="Age" onChange={handleChange} required className="border p-2 rounded" />
          <select name="gender" onChange={handleChange} required className="border p-2 rounded">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="border p-2 rounded" />
          <input name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} required className="border p-2 rounded" />
          <input name="address" placeholder="Address" onChange={handleChange} required className="border p-2 rounded" />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} required className="border p-2 rounded" />
          <input name="state" placeholder="State" onChange={handleChange} required className="border p-2 rounded" />
          <input name="district" placeholder="District" onChange={handleChange} required className="border p-2 rounded" />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="border p-2 rounded" />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="border p-2 rounded" />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition">
          {loading ? 'Registering...' : 'Register'}
        </button>

        <div className="text-center text-sm text-gray-600">
          Have an account?{' '}
          <Link to="/login" className="text-emerald-600 font-medium hover:underline">
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}
