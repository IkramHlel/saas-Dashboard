import type { IconType } from "react-icons";

export interface DashboardStats {
  sales: number,
  volume: number,
  customers: number,
  activeCustomers: number,
  allOrders: number,
  pending: number,
  completed: number,
  allProducts: number,
  activeProducts: number,
  abandonedCart: number,
}

export type DashboardMetricItem = {
  label: string;
  value: string | number;
};

export type DashboardCardConfig = {
  icon: IconType;
  iconProps?: {
    size?: number;
    color?: string;
  };
  items: DashboardMetricItem[];
};
