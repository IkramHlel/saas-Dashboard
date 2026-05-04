import { useQuery } from '@tanstack/react-query';
import type { DashboardPeriod, DashboardStats } from '../types/dashboard.types';

const fetchDashboardStats = async (period: DashboardPeriod): Promise<DashboardStats> => {
  const response = await fetch(`/api/dashboard/stats?period=${period}`);
  if (!response.ok) {
    throw new Error('Failed to fetch dashboard stats');
  }
  return response.json();
};

export const useDashboardStats = (period: DashboardPeriod) => {
  return useQuery({
    queryKey: ['dashboardStats', period],
    queryFn: () => fetchDashboardStats(period),
    retry: 1,
  });
};