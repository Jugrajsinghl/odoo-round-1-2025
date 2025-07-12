// This file provides shape references for developers. These are not enforced by JavaScript.

// Example User object
// {
//   id: "user123",
//   email: "user@example.com",
//   name: "John Doe",
//   points: 100,
//   isAdmin: false,
//   joinedAt: "2024-01-01",
//   avatar: "https://..."
// }

// Example Item object
// {
//   id: "item123",
//   title: "Blue T-shirt",
//   description: "...",
//   category: "tops",
//   type: "t-shirt",
//   size: "M",
//   condition: "good",
//   tags: ["summer", "cotton"],
//   images: ["image1.jpg", "image2.jpg"],
//   uploaderId: "user123",
//   uploaderName: "John Doe",
//   pointValue: 30,
//   isAvailable: true,
//   isApproved: true,
//   createdAt: "2024-01-01",
//   location: "Delhi"
// }

// Example SwapRequest object
// {
//   id: "swap456",
//   requesterId: "user789",
//   requesterName: "Jane Smith",
//   itemId: "item123",
//   itemTitle: "Blue T-shirt",
//   offeredItemId: "item999",
//   offeredItemTitle: "Green Hoodie",
//   type: "swap", // or "points"
//   status: "pending", // or "accepted", "rejected", "completed"
//   createdAt: "2024-03-01",
//   message: "Would you like to swap with my hoodie?"
// }

// Item constants (used for dropdowns or validation)
export const ItemCategories = ['tops', 'bottoms', 'dresses', 'outerwear', 'shoes', 'accessories'];
export const ItemConditions = ['new', 'like-new', 'good', 'fair'];
export const ItemSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Other'];