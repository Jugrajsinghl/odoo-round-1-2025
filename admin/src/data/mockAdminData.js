export const mockAdminUsers = [
  {
    id: 'user-1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    joinDate: '2024-01-15',
    status: 'active',
    itemsListed: 12,
    swapsCompleted: 8,
    points: 450,
    location: 'San Francisco, CA',
    lastActive: '2 hours ago'
  },
  {
    id: 'user-2',
    name: 'Mike Chen',
    email: 'mike.chen@email.com',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    joinDate: '2024-02-03',
    status: 'active',
    itemsListed: 6,
    swapsCompleted: 4,
    points: 280,
    location: 'New York, NY',
    lastActive: '1 day ago'
  },
  {
    id: 'user-3',
    name: 'Emma Wilson',
    email: 'emma.wilson@email.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    joinDate: '2024-01-28',
    status: 'suspended',
    itemsListed: 3,
    swapsCompleted: 1,
    points: 75,
    location: 'Los Angeles, CA',
    lastActive: '1 week ago'
  },
  {
    id: 'user-4',
    name: 'David Rodriguez',
    email: 'david.rodriguez@email.com',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    joinDate: '2024-02-10',
    status: 'active',
    itemsListed: 9,
    swapsCompleted: 6,
    points: 320,
    location: 'Chicago, IL',
    lastActive: '3 hours ago'
  }
];

export const mockAdminOrders = [
  {
    id: 'order-1',
    swapId: 'swap-001',
    requesterName: 'Mike Chen',
    requesterAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    ownerName: 'Sarah Johnson',
    ownerAvatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    itemName: 'Vintage Denim Jacket',
    itemImage: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    status: 'pending',
    requestDate: '2024-02-15',
    points: 150
  },
  {
    id: 'order-2',
    swapId: 'swap-002',
    requesterName: 'Emma Wilson',
    requesterAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    ownerName: 'David Rodriguez',
    ownerAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    itemName: 'Designer Handbag',
    itemImage: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    status: 'approved',
    requestDate: '2024-02-12',
    points: 200
  },
  {
    id: 'order-3',
    swapId: 'swap-003',
    requesterName: 'Sarah Johnson',
    requesterAvatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    ownerName: 'Mike Chen',
    ownerAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    itemName: 'Winter Coat',
    itemImage: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
    status: 'completed',
    requestDate: '2024-02-08',
    points: 180
  }
];

export const mockAdminListings = [
  {
    id: 'listing-1',
    title: 'Vintage Band T-Shirt',
    description: 'Authentic vintage band t-shirt from the 90s. Great condition with minimal wear.',
    images: ['https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400'],
    category: 'Tops & T-Shirts',
    brand: 'Vintage',
    condition: 'Good',
    points: 75,
    uploaderName: 'Mike Chen',
    uploaderAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    uploadDate: '2024-02-14',
    status: 'pending',
    views: 0,
    likes: 0
  },
  {
    id: 'listing-2',
    title: 'Summer Floral Dress',
    description: 'Beautiful summer dress perfect for warm weather occasions.',
    images: ['https://images.pexels.com/photos/7679471/pexels-photo-7679471.jpeg?auto=compress&cs=tinysrgb&w=400'],
    category: 'Dresses',
    brand: 'Zara',
    condition: 'Like New',
    points: 120,
    uploaderName: 'Emma Wilson',
    uploaderAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    uploadDate: '2024-02-13',
    status: 'flagged',
    flagReason: 'Inappropriate description',
    views: 45,
    likes: 3
  },
  {
    id: 'listing-3',
    title: 'Leather Boots',
    description: 'High-quality leather boots in excellent condition. Perfect for fall and winter.',
    images: ['https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400'],
    category: 'Shoes',
    brand: 'Dr. Martens',
    condition: 'Excellent',
    points: 160,
    uploaderName: 'David Rodriguez',
    uploaderAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    uploadDate: '2024-02-11',
    status: 'approved',
    views: 89,
    likes: 12
  },
  {
    id: 'listing-4',
    title: 'Wool Sweater',
    description: 'Cozy wool sweater perfect for cold weather. Minimal pilling, great condition.',
    images: ['https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400'],
    category: 'Sweaters',
    brand: 'Uniqlo',
    condition: 'Good',
    points: 90,
    uploaderName: 'Sarah Johnson',
    uploaderAvatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    uploadDate: '2024-02-10',
    status: 'rejected',
    views: 23,
    likes: 1
  }
];
