import { useState } from 'react';
import DashboardCard from '../cards/DashboardCard';
import { Dropdown } from '../../../../shared/components/UI/dropdown';
import styles from './SummarySection.module.css';
import type { DashboardStats, DashboardPeriod } from '../../types/dashboard.types';
import { periodOptions } from '../../utils/dashboard.utils';

type Props = {
  summarySeries: DashboardStats['summarySeries'];
  onPeriodChange?: (period: DashboardPeriod) => void;
};

const metricOptions = [
  { label: 'Sales', value: 'sales' },
  { label: 'Revenue', value: 'revenue' },
];

const axisLabels = ['100k', '80k', '60k', '40k', '20k'];

const SummarySection = ({ summarySeries, onPeriodChange }: Props) => {
  const [selectedMetric, setSelectedMetric] = useState('sales');
  const [selectedPeriod, setSelectedPeriod] = useState<DashboardPeriod>('week');
  const maxValue = 100000;

  const handlePeriodChange = (value: string) => {
    const newPeriod = value as DashboardPeriod;
    setSelectedPeriod(newPeriod);
    onPeriodChange?.(newPeriod);
  };

  return (
    <DashboardCard
      title={`Summary - ${selectedMetric === 'sales' ? 'Sales' : 'Revenue'}`}
      rightSlot={
        <div className={styles.summaryControls}>
          <Dropdown
            options={metricOptions}
            value={selectedMetric}
            onChange={(value) => setSelectedMetric(value)}
          />
          <Dropdown
            options={periodOptions}
            value={selectedPeriod}
            onChange={handlePeriodChange}
          />
        </div>
      }
    >
      <div className={styles.summaryContent}>
        <div className={styles.axisLabels}>
          {axisLabels.map((label) => (
            <span key={label} className={styles.axisLabel}>
              {label}
            </span>
          ))}
        </div>

        <div className={styles.chartGrid}>
          {summarySeries.map((point) => (
            <div key={point.label} className={styles.barColumn}>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ height: `${Math.max(20, Math.round((point.value / maxValue) * 100))}%` }}
                />
              </div>
              <p className={styles.barLabel}>{point.label}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
};

export default SummarySection;