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
    iconProps: { size: 22, color: "#1C1D22" },
    items: [
      { label: "Sales", value: `₦${stats.sales.toLocaleString()}` },
      { label: "Volume", value: stats.volume },
    ],
  },
  {
    icon: MdPeople,
    iconProps: { size: 22, color: "#1C1D22" },
    items: [
      { label: "Customers", value: stats.customers },
      { label: "Active", value: stats.activeCustomers },
    ],
  },
    {
    icon: MdShoppingBag,
    iconProps: { size: 22, color: "#1C1D22" },
    items: [
      { label: "Customers", value: stats.customers },
      { label: "Active", value: stats.activeCustomers },
    ],
  },
    {
    icon: MdInventory2,
    iconProps: { size: 22, color: "#1C1D22" },
    items: [
      { label: "Customers", value: stats.customers },
      { label: "Active", value: stats.activeCustomers },
    ],
  },
    {
    icon: MdShoppingCart,
    iconProps: { size: 22, color: "#1C1D22" },
    items: [
      { label: "Customers", value: stats.customers },
      { label: "Active", value: stats.activeCustomers },
    ],
  },
];