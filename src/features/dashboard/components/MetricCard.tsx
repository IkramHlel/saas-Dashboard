import type { ReactNode } from 'react';
import { Dropdown } from '../../../shared/components/UI/dropdown';
import styles from './MetricCard.module.css';

interface MetricItem {
  label: string;
  value: string | number;
}

interface MetricCardProps {
  items: MetricItem[];
  icon: ReactNode;
}
const MetricCard = ({ items, icon }: MetricCardProps) => {
  const options = [
    { label: "This week", value: "week" },
    { label: "This month", value: "month" },
    { label: "This year", value: "year" },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>{icon}</div>

        <Dropdown
          options={options}
          defaultValue="week"
          onChange={(value) => console.log(value)}
        />
      </div>

      <div className={styles.cardContent}>
        {items.map((item) => (
          <div key={item.label}>
            <p className={styles.title}>{item.label}</p>
            <p className={styles.value}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricCard;
