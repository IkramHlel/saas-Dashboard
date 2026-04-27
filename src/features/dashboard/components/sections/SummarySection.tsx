import DashboardCard from '../cards/DashboardCard';
import styles from './SummarySection.module.css';

const SummarySection = () => {
  return (
    
          <DashboardCard
            title="Summary"
            rightSlot={
              <div>
                <button>Sales</button>
                <button>Last 7 Days</button>
              </div>
            }
          >
            <div className={styles.barChart}>
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
            </div>
          </DashboardCard>
  );
}
export default SummarySection;