import { lazy, Suspense, useState } from 'react';
import { useDashboardStats } from './services/dashboardApi';
import MetricCard from './components/cards/MetricCard';
import styles from './Dashboard.module.css';
import { getDashboardCards } from './config/dashboard.config';
import { defaultStats } from './utils/dashboard.utils';
import type { DashboardPeriod } from './types/dashboard.types';

const MarketingSection = lazy(() => import('./components/sections/MarketingSection'));
const SummarySection = lazy(() => import('./components/sections/SummarySection'));
const RecentOrders = lazy(() => import('./components/sections/RecentOrders'));

const Dashboard = () => {
  const [period, setPeriod] = useState<DashboardPeriod>('week');
  const { data, isLoading, error, refetch } = useDashboardStats(period);
  const stats = data ?? defaultStats;
  const cards = getDashboardCards(stats);

  const handlePeriodChange = (newPeriod: DashboardPeriod) => {
    setPeriod(newPeriod);
  };

  if (isLoading) {
    return (
      <div className={styles.dashboardPage}>
        <div className={styles.loading}>Loading dashboard data…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.dashboardPage}>
        <div className={styles.errorPanel}>
          <p>Unable to load dashboard data.</p>
          <button onClick={() => refetch()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboardPage}>
      <div className={styles.cardsGrid}>
        {cards.slice(0, 3).map((card, index) => (
          <MetricCard key={index} {...card} />
        ))}
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <Suspense fallback={<div className={styles.sectionFallback}>Loading marketing...</div>}>
            <MarketingSection
              cards={cards.slice(3)}
              marketingData={stats.marketingSegments}
              period={period}
              onPeriodChange={handlePeriodChange}
            />
          </Suspense>

          <Suspense fallback={<div className={styles.sectionFallback}>Loading summary...</div>}>
            <SummarySection
              summarySeries={stats.summarySeries}
              onPeriodChange={handlePeriodChange}
            />
          </Suspense>
        </div>

        <Suspense fallback={<div className={styles.sectionFallback}>Loading orders...</div>}>
          <RecentOrders orders={stats.recentOrders} />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;