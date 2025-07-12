// Example user structure
const exampleUser = {
  id: "",
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  age: 0,
  gender: "",
  mobileNumber: "",
  address: "",
  pincode: "",
  state: "",
  district: "",
  profilePhoto: "",
  points: 0,
  isAdmin: false,
  joinedAt: "",
};

// Example item structure
const exampleItem = {
  id: "",
  title: "",
  description: "",
  category: "",
  type: "",
  size: "",
  condition: "",
  tags: [],
  images: [],
  uploaderId: "",
  uploaderName: "",
  pointValue: 0,
  isAvailable: true,
  isApproved: true,
  createdAt: "",
  location: "",
};

// Example swap request structure
const exampleSwapRequest = {
  id: "",
  requesterId: "",
  requesterName: "",
  itemId: "",
  itemTitle: "",
  offeredItemId: "",
  offeredItemTitle: "",
  type: "swap", // or 'points'
  status: "pending", // or 'accepted' | 'rejected' | 'completed'
  createdAt: "",
  message: "",
};

// Auth context mock structure
const authContext = {
  user: null,
  login: async (email, password) => {},
  signup: async (userData) => {},
  logout: () => {},
};

// SignupData example
const exampleSignupData = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  age: 0,
  gender: "",
  mobileNumber: "",
  address: "",
  pincode: "",
  state: "",
  district: "",
  profilePhoto: "",
};

// Valid enums as arrays (if needed for dropdowns or validation)
const ItemCategories = ['tops', 'bottoms', 'dresses', 'outerwear', 'shoes', 'accessories'];
const ItemConditions = ['new', 'like-new', 'good', 'fair'];
const ItemSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Other'];