import {
  MdBarChart,
  MdPeople,
  MdShoppingBag,
  MdInventory2,
  MdShoppingCart,
} from 'react-icons/md';
import type { DashboardStats } from '../types/dashboard.types';
import { formatCurrency } from '../utils/dashboard.utils';

export const getDashboardCards = (stats: DashboardStats) => [
  {
    icon: MdBarChart,
    iconProps: { size: 22, color: '#1C1D22' },
    items: [
      { label: 'Sales', value: formatCurrency(stats.sales) },
      { label: 'Volume', value: stats.volume },
    ],
    periodItems: {
      week: [
        { label: 'Sales', value: formatCurrency(4000000) },
        { label: 'Volume', value: 450 },
      ],
      month: [
        { label: 'Sales', value: formatCurrency(18000000) },
        { label: 'Volume', value: 1820 },
      ],
      year: [
        { label: 'Sales', value: formatCurrency(92000000) },
        { label: 'Volume', value: 8200 },
      ],
    },
  },
  {
    icon: MdPeople,
    iconProps: { size: 22, color: '#1C1D22' },
    items: [
      { label: 'Customers', value: stats.customers },
      { label: 'Active', value: stats.activeCustomers },
    ],
    periodItems: {
      week: [
        { label: 'Customers', value: 1250 },
        { label: 'Active', value: 1180 },
      ],
      month: [
        { label: 'Customers', value: 5400 },
        { label: 'Active', value: 4900 },
      ],
      year: [
        { label: 'Customers', value: 41500 },
        { label: 'Active', value: 39200 },
      ],
    },
  },
  {
    icon: MdShoppingBag,
    iconProps: { size: 22, color: '#1C1D22' },
    items: [
      { label: 'All Orders', value: stats.allOrders },
      { label: 'Pending', value: stats.pending },
      { label: 'Completed', value: stats.completed },
    ],
    periodItems: {
      week: [
        { label: 'All Orders', value: 450 },
        { label: 'Pending', value: 5 },
        { label: 'Completed', value: 445 },
      ],
      month: [
        { label: 'All Orders', value: 1800 },
        { label: 'Pending', value: 18 },
        { label: 'Completed', value: 1782 },
      ],
      year: [
        { label: 'All Orders', value: 9200 },
        { label: 'Pending', value: 90 },
        { label: 'Completed', value: 9110 },
      ],
    },
  },
  {
    icon: MdInventory2,
    iconProps: { size: 22, color: '#1C1D22' },
    items: [
      { label: 'All Products', value: stats.allProducts },
      { label: 'Active', value: stats.activeProducts },
    ],
    periodItems: {
      week: [
        { label: 'All Products', value: 45 },
        { label: 'Active', value: 32 },
      ],
      month: [
        { label: 'All Products', value: 78 },
        { label: 'Active', value: 59 },
      ],
      year: [
        { label: 'All Products', value: 340 },
        { label: 'Active', value: 310 },
      ],
    },
  },
  {
    icon: MdShoppingCart,
    iconProps: { size: 22, color: '#1C1D22' },
    items: [
      { label: 'Abandoned Cart', value: `${stats.abandonedCart}%` },
      { label: 'Customers', value: stats.customers },
    ],
    periodItems: {
      week: [
        { label: 'Abandoned Cart', value: '20%' },
        { label: 'Customers', value: 1250 },
      ],
      month: [
        { label: 'Abandoned Cart', value: '18%' },
        { label: 'Customers', value: 5400 },
      ],
      year: [
        { label: 'Abandoned Cart', value: '12%' },
        { label: 'Customers', value: 41500 },
      ],
    },
  },
];