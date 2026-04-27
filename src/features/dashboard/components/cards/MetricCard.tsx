import { Dropdown } from '../../../../shared/components/UI/dropdown';
import styles from './MetricCard.module.css';
import {type DashboardCardConfig } from '../../types/dashboard.types';


const MetricCard = ({ items, icon: Icon, iconProps }: DashboardCardConfig) => {
  const options = [
    { label: "This week", value: "week" },
    { label: "This month", value: "month" },
    { label: "This year", value: "year" },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <Icon {...iconProps} />
        </div>

        <Dropdown
          options={options}
          defaultValue="week"
          onChange={(value) => console.log(value)}
        />
      </div>

      <div className={styles.content}>
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
