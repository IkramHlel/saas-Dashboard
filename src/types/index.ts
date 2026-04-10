// Common types for the SaaS Dashboard

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  state?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface DashboardStats {
  sales: number,
  volume: number,
  customers: number,
  active: number,
  allOrders: number,
  pending: number,
  completed: number,
  allProducts: number,
  Active: number,
  abandonedCart: number,
}

// Add more types as needed