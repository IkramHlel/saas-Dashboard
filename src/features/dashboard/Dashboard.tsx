import { useDashboardStats } from './services/dashboardApi';
import MetricCard from './components/cards/MetricCard';
import styles from './Dashboard.module.css';
import { getDashboardCards } from './config/dashboard.config';
import { defaultStats } from './utils/dashboard.utils';

import MarketingSection from './components/sections/MarketingSection';
import SummarySection from './components/sections/SummarySection';
import RecentOrders from './components/sections/RecentOrders';


const Dashboard = () => {
  const { data, isLoading, error } = useDashboardStats();

  const stats = data ?? defaultStats;
  const cards = getDashboardCards(stats);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.dashboardPage}>
      <div className={styles.cardsGrid}>
        {cards.slice(0, 3).map((card, index) => (
          <MetricCard key={index} {...card} />
        ))}
      </div>
      <div className={styles.mainGrid}>

        <div className={styles.leftColumn}>
          <MarketingSection cards={cards} /> 
          <SummarySection />
        </div>

        <RecentOrders />

      </div>
    </div>
  );
};

export default Dashboard;