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
  },
  {
    icon: MdPeople,
    iconProps: { size: 22, color: '#1C1D22' },
    items: [
      { label: 'Customers', value: stats.customers },
      { label: 'Active', value: stats.activeCustomers },
    ],
  },
  {
    icon: MdShoppingBag,
    iconProps: { size: 22, color: '#1C1D22' },
    items: [
      { label: 'All Orders', value: stats.allOrders },
      { label: 'Pending', value: stats.pending },
      { label: 'Completed', value: stats.completed },
    ],
  },
  {
    icon: MdInventory2,
    iconProps: { size: 22, color: '#1C1D22' },
    items: [
      { label: 'All Products', value: stats.allProducts },
      { label: 'Active', value: stats.activeProducts },
    ],
  },
  {
    icon: MdShoppingCart,
    iconProps: { size: 22, color: '#1C1D22' },
    items: [
      { label: 'Abandoned Cart', value: `${stats.abandonedCart}%` },
      { label: 'Customers', value: stats.customers },
    ],
  },
];