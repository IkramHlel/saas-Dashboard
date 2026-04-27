// dashboard.config.ts
import {
  MdBarChart,
  MdPeople,
  MdShoppingBag,
  MdInventory2,
  MdShoppingCart,
} from "react-icons/md";
import type { DashboardStats } from "../types/dashboard.types";

export const getDashboardCards = (stats: DashboardStats) => [
  {
    icon: MdBarChart,
    items: [
      { label: "Sales", value: `₦${stats.sales.toLocaleString()}` },
      { label: "Volume", value: stats.volume },
    ],
  },
  {
    icon: MdPeople,
    items: [
      { label: "Customers", value: stats.customers },
      { label: "Active", value: stats.activeCustomers },
    ],
  },
    {
    icon: MdShoppingBag,
    items: [
      { label: "Customers", value: stats.customers },
      { label: "Active", value: stats.activeCustomers },
    ],
  },
    {
    icon: MdInventory2,
    items: [
      { label: "Customers", value: stats.customers },
      { label: "Active", value: stats.activeCustomers },
    ],
  },
    {
    icon: MdShoppingCart,
    items: [
      { label: "Customers", value: stats.customers },
      { label: "Active", value: stats.activeCustomers },
    ],
  },
];