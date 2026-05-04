import type { IconType } from "react-icons";

export type DashboardPeriod = 'week' | 'month' | 'year';

export interface DashboardStats {
  sales: number;
  volume: number;
  customers: number;
  activeCustomers: number;
  allOrders: number;
  pending: number;
  completed: number;
  allProducts: number;
  activeProducts: number;
  abandonedCart: number;
  marketingSegments: {
    acquisition: number;
    purchase: number;
    retention: number;
  };
  summarySeries: Array<{ label: string; value: number }>;
  recentOrders: Array<{
    id: string;
    product: string;
    price: number;
    quantity: number;
    date: string;
    status: 'Pending' | 'Completed';
    imageUrl: string;
  }>;
}

export type DashboardMetricItem = {
  label: string;
  value: string | number;
};

export type DashboardCardConfig = {
  icon: IconType;
  title?: string;
  iconProps?: {
    size?: number;
    color?: string;
  };
  items: DashboardMetricItem[];
};
