import type { DashboardStats } from "../types/dashboard.types";

export const defaultStats: DashboardStats = {
  sales: 0,
  volume: 0,
  customers: 0,
  activeCustomers: 0,
  allOrders: 0,
  pending: 0,
  completed: 0,
  allProducts: 0,
  activeProducts: 0,
  abandonedCart: 0,
  marketingSegments: {
    acquisition: 0,
    purchase: 0,
    retention: 0,
  },
  summarySeries: [
    { label: 'Mon', value: 0 },
    { label: 'Tue', value: 0 },
    { label: 'Wed', value: 0 },
    { label: 'Thu', value: 0 },
    { label: 'Fri', value: 0 },
    { label: 'Sat', value: 0 },
    { label: 'Sun', value: 0 },
  ],
  recentOrders: [],
};

export const periodOptions = [
  { label: 'This week', value: 'week' },
  { label: 'This month', value: 'month' },
  { label: 'This year', value: 'year' },
];

export const formatCurrency = (value: number) =>
  `₦${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
