import DashboardCard from '../cards/DashboardCard';
import styles from './MarketingSection.module.css';
import { Dropdown } from '../../../../shared/components/UI/dropdown';
import { periodOptions } from '../../utils/dashboard.utils';
import type { DashboardPeriod, DashboardStats } from '../../types/dashboard.types';

type Props = {
  marketingData: DashboardStats['marketingSegments'];
  period: DashboardPeriod;
  onPeriodChange: (value: DashboardPeriod) => void;
};

const MarketingChart = ({ marketingData, period, onPeriodChange }: Props) => {
  const total =
    marketingData.acquisition + marketingData.purchase + marketingData.retention;
  const acquisitionPct = Math.round((marketingData.acquisition / total) * 100);
  const purchasePct = Math.round((marketingData.purchase / total) * 100);
  const donutStyle = {
    background: `conic-gradient(#3b82f6 0 ${acquisitionPct}%, #8b5cf6 ${acquisitionPct}% ${acquisitionPct + purchasePct}%, #f59e0b ${acquisitionPct + purchasePct}% 100%)`,
  };

  return (
    <DashboardCard
      title="Marketing"
      rightSlot={
        <Dropdown
          options={periodOptions}
          value={period}
          onChange={(value) => onPeriodChange(value as DashboardPeriod)}
        />
      }
    >
      <div className={styles.chartContainer}>
        <div className={styles.legend}>
          <div>
            <span className={styles.dotBlue} />
            Acquisition
          </div>
          <div>
            <span className={styles.dotPurple} />
            Purchase
          </div>
          <div>
            <span className={styles.dotOrange} />
            Retention
          </div>
        </div>

        <div className={styles.donutWrapper}>
          <div className={styles.donut} style={donutStyle}>
            <div className={styles.donutCenter}>
              <p className={styles.donutValue}>{total}</p>
              <p className={styles.donutLabel}>Marketing leads</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default MarketingChart;