import type { ReactNode } from 'react';
import { Dropdown } from './dropdown';
import styles from './MetricCard.module.css';

interface MetricCardProps {
  titles: string[];
  values: (string | number)[];
  icon: ReactNode;
  metaValue?: string;
}

const MetricCard = ({ titles, values, icon }: MetricCardProps) => {
    const options = [
  { label: "This week", value: "week" },
  { label: "This month", value: "month" },
  { label: "This year", value: "year" },
];
    return(
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <div className={styles.cardIcon}>{icon}</div>
       <Dropdown    
        options={options}
        defaultValue="week"
        onChange={(value) => console.log(value)}/>
    </div>
    <div className={styles.cardTitles}> 
        {titles.map((title: string) => (<p className={styles.title}>{title}</p>))}
    </div>
    <div className={styles.cardValues}> 
        {values.map((value: string | number) => (<p className={styles.value}>{value}</p>))}
    </div>
   
    
    <div className={styles.cardMeta}>
    
    </div>
  </div>
)};

export default MetricCard;
