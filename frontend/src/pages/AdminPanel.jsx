import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockItems } from '../data/mockItems';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Check, 
  X, 
  Eye, 
  Trash2, 
  Users, 
  Package, 
  AlertTriangle,
  Filter
} from 'lucide-react';

export function AdminPanel() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending');
  const [filterStatus, setFilterStatus] = useState('all');

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600 mb-6">You don't have permission to access the admin panel.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const pendingItems = mockItems.filter(item => !item.isApproved);
  const approvedItems = mockItems.filter(item => item.isApproved);
  const rejectedItems = []; // Mock rejected items

  const stats = [
    { label: 'Total Items', value: mockItems.length, icon: Package, color: 'text-blue-600' },
    { label: 'Pending Review', value: pendingItems.length, icon: AlertTriangle, color: 'text-yellow-600' },
    { label: 'Approved', value: approvedItems.length, icon: Check, color: 'text-green-600' },
    { label: 'Total Users', value: 1200, icon: Users, color: 'text-purple-600' },
  ];

  const handleApprove = (itemId) => {
    alert(`Item ${itemId} approved!`);
  };

  const handleReject = (itemId) => {
    alert(`Item ${itemId} rejected!`);
  };

  const handleDelete = (itemId) => {
    if (window.confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
      alert(`Item ${itemId} deleted!`);
    }
  };

  const ItemRow = ({ item }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <div className="font-medium text-gray-900">{item.title}</div>
            <div className="text-sm text-gray-500">by {item.uploaderName}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="capitalize text-sm text-gray-600">{item.category}</span>
      </td>
      <td className="px-6 py-4">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          item.condition === 'new' ? 'bg-green-100 text-green-800' :
          item.condition === 'like-new' ? 'bg-blue-100 text-blue-800' :
          item.condition === 'good' ? 'bg-yellow-100 text-yellow-800' :
          'bg-orange-100 text-orange-800'
        }`}>
          {item.condition}
        </span>
      </td>
      <td className="px-6 py-4 text-sm text-gray-600">
        {item.pointValue} pts
      </td>
      <td className="px-6 py-4 text-sm text-gray-600">
        {item.createdAt}
      </td>
      <td className="px-6 py-4">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          item.isApproved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {item.isApproved ? 'Approved' : 'Pending'}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigate(`/item/${item.id}`)}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            title="View Details"
          >
            <Eye className="h-4 w-4" />
          </button>
          {!item.isApproved && (
            <>
              <button
                onClick={() => handleApprove(item.id)}
                className="p-1 text-green-600 hover:text-green-700 transition-colors"
                title="Approve"
              >
                <Check className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleReject(item.id)}
                className="p-1 text-red-600 hover:text-red-700 transition-colors"
                title="Reject"
              >
                <X className="h-4 w-4" />
              </button>
            </>
          )}
          <button
            onClick={() => handleDelete(item.id)}
            className="p-1 text-red-600 hover:text-red-700 transition-colors"
            title="Delete"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          <p className="text-gray-600">Manage items, users, and platform content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-gray-100">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'pending', label: 'Pending Review', count: pendingItems.length },
                { id: 'approved', label: 'Approved Items', count: approvedItems.length },
                { id: 'rejected', label: 'Rejected Items', count: rejectedItems.length },
                { id: 'users', label: 'User Management', count: null },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  {tab.count !== null && (
                    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      activeTab === tab.id
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'users' ? (
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">User Management</h3>
                <p className="text-gray-600">User management features coming soon...</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Filter className="h-4 w-4 text-gray-400" />
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="all">All Items</option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Showing {
                      activeTab === 'pending' ? pendingItems.length :
                      activeTab === 'approved' ? approvedItems.length :
                      rejectedItems.length
                    } items
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {(activeTab === 'pending' ? pendingItems :
                        activeTab === 'approved' ? approvedItems :
                        rejectedItems).map((item) => (
                        <ItemRow key={item.id} item={item} />
                      ))}
                    </tbody>
                  </table>
                </div>

                {(activeTab === 'pending' ? pendingItems :
                  activeTab === 'approved' ? approvedItems :
                  rejectedItems).length === 0 && (
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
                    <p className="text-gray-600">
                      {activeTab === 'pending' && 'No items pending review at the moment.'}
                      {activeTab === 'approved' && 'No approved items found.'}
                      {activeTab === 'rejected' && 'No rejected items found.'}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
