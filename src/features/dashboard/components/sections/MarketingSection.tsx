import DashboardCard from '../cards/DashboardCard';
import MetricCard from '../cards/MetricCard';
import styles from './MarketingSection.module.css';
import type { DashboardCardConfig } from '../../types/dashboard.types';


type Props = {
  cards: DashboardCardConfig[];
};

const MarketingSection = ({ cards }: Props) => {
  return (
<div className={styles.markettingGrid}>
            <DashboardCard
              title="Marketing"
              subtitle="Acquisition · Purchase · Retention"
              rightSlot={<span>This Week</span>}
            >
            <div className={styles.chartBody}>
              <div className={styles.chartPlaceholder}>
                <div className={styles.bar} />
                <div className={styles.bar} />
                <div className={styles.bar} />
                <div className={styles.bar} />
              </div>
            </div>
            </DashboardCard>
            <div className={styles.markettingCards}>
             {cards.slice(3).map((card, index) => (
                <MetricCard key={index} {...card} />
              ))}
            </div> 
          </div> 
  );
}
export default MarketingSection;