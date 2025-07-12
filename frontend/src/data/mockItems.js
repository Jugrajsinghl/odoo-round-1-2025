// File: mockItems.js
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'

export const mockItems = [
  {
    id: '1',
    title: 'Vintage jeans Shoe ',
    description: 'The muted olive green tone adds a fresh yet earthy touch to your outfit, making it a standout choice for both casual and semi-casual looks. The denim material not only offers a soft, breathable feel but also adds a distinctive texture that sets these shoes apart from the ordinary.',
    category: 'outerwear',
    type: 'jacket',
    size: 'M',
    condition: 'good',
    tags: ['vintage', 'denim', 'casual', 'blue'],
    images: [
      // 'https://images.pexels.com/photos/1002693/pexels-photo-1002693.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '1',
    uploaderName: 'Sarah Johnson',
    pointValue: 75,
    isAvailable: true,
    isApproved: true,
    createdAt: '2024-01-20',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    title: 'Floral Summer Dress',
    description: 'Light and breezy floral dress perfect for summer. Never worn, still has tags.',
    category: 'dresses',
    type: 'midi dress',
    size: 'S',
    condition: 'new',
    tags: ['floral', 'summer', 'midi', 'feminine'],
    images: [
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '1',
    uploaderName: 'Sarah Johnson',
    pointValue: 60,
    isAvailable: true,
    isApproved: true,
    createdAt: '2024-01-18'
  },
  {
    id: '3',
    title: 'Classic White Sneakers',
    description: 'Clean white leather sneakers in great condition. Minor scuffs but lots of life left.',
    category: 'shoes',
    type: 'sneakers',
    size: '8',
    condition: 'good',
    tags: ['white', 'sneakers', 'leather', 'casual'],
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '1',
    uploaderName: 'Sarah Johnson',
    pointValue: 45,
    isAvailable: true,
    isApproved: true,
    createdAt: '2024-01-16'
  },
  {
    id: '4',
    title: 'Leather Crossbody Bag',
    description: 'Step into effortless style with this blue textured shirt featuring subtle fluid wave patterns that add a touch of elegance and movement. The rich blue base is complemented by gently flowing wave textures, creating a modern, eye-catching look. Made from high-quality fabric, it offers comfort, breathability, and a perfect fit—ideal for both casual and semi-formal occasions.',
    category: 'accessories',
    type: 'bag',
    size: 'Other',
    condition: 'like-new',
    tags: ['leather', 'tan', 'crossbody', 'bag'],
    images:[img1],
    uploaderId: '1',
    uploaderName: 'Sarah Johnson',
    pointValue: 80,
    isAvailable: true,
    isApproved: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Floral Summer Dress',
    description: 'Light and breezy floral dress perfect for summer. Never worn, still has tags.',
    category: 'dresses',
    type: 'midi dress',
    size: 'S',
    condition: 'new',
    tags: ['floral', 'summer', 'midi', 'feminine'],
    images: [
      img2
    ],
    uploaderId: '1',
    uploaderName: 'Sarah Johnson',
    pointValue: 60,
    isAvailable: true,
    isApproved: true,
    createdAt: '2024-01-18'
  },
  // {
    //   id: '5',
  //   title: 'High-waisted Jeans',
  //   description: 'Trendy high-waisted jeans with a flattering fit. Worn a few times but still in excellent condition.',
  //   category: 'bottoms',
  //   type: 'jeans',
  //   size: 'M',
  //   condition: 'like-new',
  //   tags: ['high-waisted', 'jeans', 'denim', 'trendy'],
  //   images: [
  //     img2
  //   ],
  //   uploaderId: '1',
  //   uploaderName: 'Sarah Johnson',
  //   pointValue: 55,
  //   isAvailable: true,
  //   isApproved: false,
  //   createdAt: '2024-01-22'
  // },
  {
    id: '6',
    title: 'Silk Blouse',
    description: 'Elevate your style with this exquisite one-piece yellow silk fabric, radiating warmth and elegance. Crafted from premium-quality silk, this fabric boasts a smooth, lustrous texture and a graceful drape, perfect for creating sarees, lehengas, kurtis, or designer outfits. The rich yellow hue adds a vibrant yet classy touch, ideal for festive occasions, weddings, or ethnic wear.',
    category: 'tops',
    type: 'blouse',
    size: 'S',
    condition: 'good',
    tags: ['silk', 'pink', 'blouse', 'formal'],
    images: [
      'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '1',
    uploaderName: 'Sarah Johnson',
    pointValue: 65,
    isAvailable: true,
    isApproved: true,
    createdAt: '2024-01-14'
  }
];