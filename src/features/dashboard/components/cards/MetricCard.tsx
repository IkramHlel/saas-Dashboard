import { Dropdown } from '../../../../shared/components/UI/dropdown';
import styles from './MetricCard.module.css';
import type { DashboardCardConfig, DashboardPeriod } from '../../types/dashboard.types';
import { periodOptions } from '../../utils/dashboard.utils';

type MetricCardProps = DashboardCardConfig & {
  period?: DashboardPeriod;
  onPeriodChange?: (value: DashboardPeriod) => void;
  showDropdown?: boolean;
};

const MetricCard = ({
  items,
  icon: Icon,
  iconProps,
  period,
  onPeriodChange,
  showDropdown = true,
}: MetricCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <Icon {...iconProps} />
        </div>

        {showDropdown && (
          <Dropdown
            options={periodOptions}
            value={period}
            defaultValue="week"
            onChange={(value) => onPeriodChange?.(value as DashboardPeriod)}
          />
        )}
      </div>

      <div className={styles.content}>
        {items.map((item) => (
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
