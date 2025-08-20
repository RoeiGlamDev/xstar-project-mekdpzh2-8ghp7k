import { ReactNode } from 'react';

// Define types for the cosmetics website
export type Product = {
  id: string; // Unique identifier for each product
  name: string; // Name of the product
  description: string; // Description of the product
  price: number; // Price of the product
  imageUrl: string; // URL of the product image
  category: string; // Category of the product (e.g., skincare, makeup)
};

export type Category = {
  id: string; // Unique identifier for each category
  name: string; // Name of the category
  products: Product[]; // List of products in the category
};

export type CartItem = {
  product: Product; // Product added to the cart
  quantity: number; // Quantity of the product
};

export type User = {
  id: string; // Unique identifier for the user
  name: string; // User's name
  email: string; // User's email address
  address: string; // User's shipping address
};

export type Order = {
  id: string; // Unique identifier for the order
  user: User; // User who placed the order
  items: CartItem[]; // Items included in the order
  totalAmount: number; // Total amount for the order
  orderDate: string; // Date when the order was placed
};

export type AppContextType = {
  cart: CartItem[]; // Current items in the cart
  addToCart: (item: Product, quantity: number) => void; // Function to add item to cart
  removeFromCart: (id: string) => void; // Function to remove item from cart
  user: User | null; // Current logged-in user
  login: (user: User) => void; // Function to log in user
  logout: () => void; // Function to log out user
};

export type ReactChildren = {
  children: ReactNode; // Children prop for components
};

export default {}; // Default export for the module