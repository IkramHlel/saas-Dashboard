import DashboardCard from '../cards/DashboardCard';
import { MdShoppingBag } from 'react-icons/md';
import styles from './RecentOrders.module.css';

const RecentOrders = () => {
  return (
            <DashboardCard title="Recent Orders">
            <div className={styles.orderEmptyIcon}>
              <MdShoppingBag size={32} />
            </div>
            <h4 className={styles.orderEmptyTitle}>No Orders Yet?</h4>
            <p className={styles.orderEmptyText}>
              Add products to your store and start selling to see orders here.
            </p>
            <button className={styles.primaryButton}>New Product</button>
        </DashboardCard>
  );
}
export default RecentOrders;