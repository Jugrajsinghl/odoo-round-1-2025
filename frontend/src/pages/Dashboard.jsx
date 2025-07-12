import React from 'react';
import { useAuth } from '../context/AuthContext';
import { mockItems } from '../data/mockItems';
import { ItemCard } from '../components/ItemCard';
import { User, Package, ArrowRightLeft, Star, Plus, TrendingUp } from 'lucide-react';

export function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  const userItems = mockItems.filter(item => item.uploaderId === user.id);
  const pendingItems = userItems.filter(item => !item.isApproved);
  const approvedItems = userItems.filter(item => item.isApproved);

  const stats = [
    { label: 'Total Points', value: user.points, icon: Star, color: 'text-yellow-600' },
    { label: 'Items Listed', value: userItems.length, icon: Package, color: 'text-blue-600' },
    { label: 'Swaps Completed', value: 3, icon: ArrowRightLeft, color: 'text-green-600' },
    { label: 'Member Since', value: user.joinedAt, icon: TrendingUp, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-100 p-4 rounded-full">
              <User className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
              <p className="text-gray-600">Manage your items and track your swaps</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-emerald-500 transition-colors group">
              <Plus className="h-6 w-6 text-gray-400 group-hover:text-emerald-500 mr-3" />
              <span className="text-gray-600 group-hover:text-emerald-600">Add New Item</span>
            </button>
            <button className="flex items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-emerald-500 transition-colors group">
              <Package className="h-6 w-6 text-gray-400 group-hover:text-emerald-500 mr-3" />
              <span className="text-gray-600 group-hover:text-emerald-600">Browse Items</span>
            </button>
            <button className="flex items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-emerald-500 transition-colors group">
              <ArrowRightLeft className="h-6 w-6 text-gray-400 group-hover:text-emerald-500 mr-3" />
              <span className="text-gray-600 group-hover:text-emerald-600">View Swaps</span>
            </button>
          </div>
        </div>

        {/* Pending Approval */}
        {pendingItems.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Approval</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingItems.map((item) => (
                <div key={item.id} className="relative">
                  <ItemCard item={item} showActions={false} />
                  <div className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-medium rounded-full">
                    Pending Review
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Your Items */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Listed Items</h2>
          {approvedItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {approvedItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No items yet</h3>
              <p className="text-gray-600 mb-6">Start by listing your first item to exchange</p>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                Add Your First Item
              </button>
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <ArrowRightLeft className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Swap completed</p>
                <p className="text-sm text-gray-600">Your "Vintage Denim Jacket" was swapped for "Silk Scarf"</p>
              </div>
              <span className="text-xs text-gray-500 ml-auto">2 days ago</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Plus className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Item approved</p>
                <p className="text-sm text-gray-600">"Floral Summer Dress" is now live on the platform</p>
              </div>
              <span className="text-xs text-gray-500 ml-auto">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
