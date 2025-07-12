import React, { useState } from 'react';
import { mockAdminUsers } from '../data/mockAdminData';
import { Ban, CheckCircle, XCircle, Eye, Calendar, MapPin } from 'lucide-react';

const UserManagement = () => {
  const [users, setUsers] = useState(mockAdminUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserAction = (userId, action) => {
    setUsers(users.map(user =>
      user.id === userId
        ? {
            ...user,
            status:
              action === 'activate'
                ? 'active'
                : action === 'suspend'
                ? 'suspended'
                : 'banned',
          }
        : user
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'suspended':
        return 'bg-yellow-500';
      case 'banned':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'suspended':
        return 'Suspended';
      case 'banned':
        return 'Banned';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Manage Users</h2>
        <span className="text-gray-400">{users.length} total users</span>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex items-center space-x-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
              />

              <div className="flex-1 bg-gray-900 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                    <p className="text-gray-400">{user.email}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(user.status)}`}
                    >
                      {getStatusText(user.status)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="font-medium text-white">{user.itemsListed}</span> items listed
                  </div>
                  <div className="text-gray-400">
                    <span className="font-medium text-white">{user.swapsCompleted}</span> swaps completed
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>
                      <span className="text-blue-400 font-medium">{user.points}</span> points
                    </span>
                    <span>Last active: {user.lastActive}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setSelectedUser(user)}
                  className="flex items-center justify-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>

                {user.status === 'active' ? (
                  <button
                    onClick={() => handleUserAction(user.id, 'suspend')}
                    className="flex items-center justify-center space-x-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                  >
                    <Ban className="w-4 h-4" />
                    <span>Suspend</span>
                  </button>
                ) : user.status === 'suspended' ? (
                  <button
                    onClick={() => handleUserAction(user.id, 'activate')}
                    className="flex items-center justify-center space-x-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Activate</span>
                  </button>
                ) : null}

                {user.status !== 'banned' && (
                  <button
                    onClick={() => handleUserAction(user.id, 'ban')}
                    className="flex items-center justify-center space-x-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Ban</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">User Details</h3>
              <button onClick={() => setSelectedUser(null)} className="text-gray-400 hover:text-white">
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{selectedUser.name}</h4>
                  <p className="text-gray-400">{selectedUser.email}</p>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(selectedUser.status)}`}
                  >
                    {getStatusText(selectedUser.status)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white ml-2">{selectedUser.location}</span>
                </div>
                <div>
                  <span className="text-gray-400">Join Date:</span>
                  <span className="text-white ml-2">
                    {new Date(selectedUser.joinDate).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Items Listed:</span>
                  <span className="text-white ml-2">{selectedUser.itemsListed}</span>
                </div>
                <div>
                  <span className="text-gray-400">Swaps Completed:</span>
                  <span className="text-white ml-2">{selectedUser.swapsCompleted}</span>
                </div>
                <div>
                  <span className="text-gray-400">Points:</span>
                  <span className="text-white ml-2">{selectedUser.points}</span>
                </div>
                <div>
                  <span className="text-gray-400">Last Active:</span>
                  <span className="text-white ml-2">{selectedUser.lastActive}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
