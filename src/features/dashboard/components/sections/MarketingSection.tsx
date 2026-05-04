import MetricCard from '../cards/MetricCard';
import styles from './MarketingSection.module.css';
import type {
  DashboardCardConfig,
  DashboardPeriod,
  DashboardStats,
} from '../../types/dashboard.types';
import MarketingChart from './MarketingChart';

type Props = {
  cards: DashboardCardConfig[];
  marketingData: DashboardStats['marketingSegments'];
  period: DashboardPeriod;
  onPeriodChange: (value: DashboardPeriod) => void;
};

const MarketingSection = ({ cards, marketingData, period, onPeriodChange }: Props) => {
  return (
    <div className={styles.markettingGrid}>
      <MarketingChart
        marketingData={marketingData}
        period={period}
        onPeriodChange={onPeriodChange}
      />

      <div className={styles.markettingCards}>
        {cards.map((card, index) => (
          <MetricCard
            key={index}
            {...card}
            showDropdown={index === 1}
            defaultPeriod="week"
          />
        ))}
      </div>
    </div>
  );
};

export default MarketingSection;