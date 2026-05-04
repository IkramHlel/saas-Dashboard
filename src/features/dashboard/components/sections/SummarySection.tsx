import DashboardCard from '../cards/DashboardCard';
import styles from './SummarySection.module.css';
import type { DashboardStats } from '../../types/dashboard.types';

type Props = {
  summarySeries: DashboardStats['summarySeries'];
};

const SummarySection = ({ summarySeries }: Props) => {
  const maxValue = Math.max(...summarySeries.map((point) => point.value), 1);

  return (
    <DashboardCard
      title="Summary"
      rightSlot={
        <div className={styles.summaryControls}>
          <span className={styles.summaryLabel}>Sales</span>
          <span className={styles.summaryPeriod}>Last 7 Days</span>
        </div>
      }
    >
      <div className={styles.barChart}>
        {summarySeries.map((point) => (
          <div key={point.label} className={styles.barWrapper}>
            <div
              className={styles.bar}
              style={{ height: `${Math.max(20, Math.round((point.value / maxValue) * 100))}%` }}
            />
            <p className={styles.barLabel}>{point.label}</p>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default SummarySection;