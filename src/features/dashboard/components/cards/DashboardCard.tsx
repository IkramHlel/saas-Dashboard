import styles from './DashboardCard.module.css';
import { type ReactNode } from 'react';
type Props = {
  title?: string;
  subtitle?: string;
  rightSlot?: ReactNode;
  children: ReactNode;
  variant?: 'default' | 'compact';
};

const DashboardCard = ({
  title,
  subtitle,
  rightSlot,
  children,
}: Props) => {
  return (
    <div className={styles.card}>
      
      {(title || rightSlot) && (
        <div className={styles.header}>
          <div>
            {title && <h3 className={styles.title}>{title}</h3>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          {rightSlot && <div>{rightSlot}</div>}
        </div>
      )}

      <div className={styles.content}>
        {children}
      </div>

    </div>
  );
};

export default DashboardCard;