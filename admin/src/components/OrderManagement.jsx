import React, { useState } from 'react';
import { mockAdminOrders } from '../data/mockAdminData';
import { CheckCircle, XCircle, Eye, Calendar, Tag } from 'lucide-react';

const OrderManagement = () => {
  const [orders, setOrders] = useState(mockAdminOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderAction = (orderId, action) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: action === 'approve' ? 'approved' : 'cancelled',
            }
          : order
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500';
      case 'approved':
        return 'bg-blue-500';
      case 'completed':
        return 'bg-green-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'approved':
        return 'Approved';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Manage Orders</h2>
        <span className="text-gray-400">{orders.length} total orders</span>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex items-center space-x-6">
              <img
                src={order.itemImage}
                alt={order.itemName}
                className="w-16 h-16 rounded-lg object-cover border-2 border-gray-700"
              />

              <div className="flex-1 bg-gray-900 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{order.itemName}</h3>
                    <p className="text-gray-400">Swap ID: {order.swapId}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={order.requesterAvatar}
                        alt={order.requesterName}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-400">
                        Requester: <span className="text-white">{order.requesterName}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src={order.ownerAvatar}
                        alt={order.ownerName}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-400">
                        Owner: <span className="text-white">{order.ownerName}</span>
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>Requested: {new Date(order.requestDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Tag className="w-4 h-4" />
                      <span className="text-blue-400 font-medium">{order.points} points</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="flex items-center justify-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>

                {order.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleOrderAction(order.id, 'approve')}
                      className="flex items-center justify-center space-x-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Approve</span>
                    </button>
                    <button
                      onClick={() => handleOrderAction(order.id, 'cancel')}
                      className="flex items-center justify-center space-x-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                    >
                      <XCircle className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Order Details</h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-white"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedOrder.itemImage}
                  alt={selectedOrder.itemName}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{selectedOrder.itemName}</h4>
                  <p className="text-gray-400">Swap ID: {selectedOrder.swapId}</p>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
                      selectedOrder.status
                    )}`}
                  >
                    {getStatusText(selectedOrder.status)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-3">Requester</h5>
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedOrder.requesterAvatar}
                      alt={selectedOrder.requesterName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white font-medium">{selectedOrder.requesterName}</p>
                      <p className="text-gray-400 text-sm">Requesting this item</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-3">Owner</h5>
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedOrder.ownerAvatar}
                      alt={selectedOrder.ownerName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white font-medium">{selectedOrder.ownerName}</p>
                      <p className="text-gray-400 text-sm">Item owner</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-3">Order Information</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Request Date:</span>
                    <span className="text-white ml-2">
                      {new Date(selectedOrder.requestDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Points Value:</span>
                    <span className="text-blue-400 font-medium ml-2">{selectedOrder.points} points</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
