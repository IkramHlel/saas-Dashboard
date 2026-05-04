import { lazy, Suspense } from 'react';
import { useDashboardStats } from './services/dashboardApi';
import MetricCard from './components/cards/MetricCard';
import styles from './Dashboard.module.css';
import { getDashboardCards } from './config/dashboard.config';
import { defaultStats } from './utils/dashboard.utils';

const MarketingSection = lazy(() => import('./components/sections/MarketingSection'));
const SummarySection = lazy(() => import('./components/sections/SummarySection'));
const RecentOrders = lazy(() => import('./components/sections/RecentOrders'));

const Dashboard = () => {
  const { data, isLoading, error, refetch } = useDashboardStats('week');
  const stats = data ?? defaultStats;
  const cards = getDashboardCards(stats);

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
              period="week"
              onPeriodChange={() => {}}
            />
          </Suspense>

          <Suspense fallback={<div className={styles.sectionFallback}>Loading summary...</div>}>
            <SummarySection summarySeries={stats.summarySeries} />
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