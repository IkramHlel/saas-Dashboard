import { useState } from 'react';
import { Dropdown } from '../../../../shared/components/UI/dropdown';
import styles from './MetricCard.module.css';
import type { DashboardCardConfig, DashboardPeriod } from '../../types/dashboard.types';
import { periodOptions } from '../../utils/dashboard.utils';

type MetricCardProps = DashboardCardConfig & {
  defaultPeriod?: DashboardPeriod;
  onPeriodChange?: (value: DashboardPeriod) => void;
  showDropdown?: boolean;
};

const MetricCard = ({
  items,
  icon: Icon,
  iconProps,
  defaultPeriod = 'week',
  onPeriodChange,
  showDropdown = true,
  periodItems,
}: MetricCardProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<DashboardPeriod>(defaultPeriod);

  const handlePeriodChange = (value: string) => {
    const next = value as DashboardPeriod;
    setSelectedPeriod(next);
    onPeriodChange?.(next);
  };

  const displayItems =
    periodItems?.[selectedPeriod] ??
    items;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <Icon {...iconProps} />
        </div>

        {showDropdown && (
          <Dropdown
            options={periodOptions}
            value={selectedPeriod}
            defaultValue="week"
            onChange={handlePeriodChange}
          />
        )}
      </div>

      <div className={styles.content}>
        {displayItems.map((item) => (
          <div key={item.label} className={styles.itemRow}>
            <p className={styles.title}>{item.label}</p>
            <p className={styles.value}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricCard;
