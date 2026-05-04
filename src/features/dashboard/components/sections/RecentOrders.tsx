import DashboardCard from '../cards/DashboardCard';
import { MdShoppingBag } from 'react-icons/md';
import styles from './RecentOrders.module.css';
import type { DashboardStats } from '../../types/dashboard.types';

type Props = {
  orders: DashboardStats['recentOrders'];
};

const RecentOrders = ({ orders }: Props) => {
  const hasOrders = orders.length > 0;

  return (
    <DashboardCard title="Recent Orders">
      {hasOrders ? (
        <div className={styles.orderList}>
          {orders.map((order) => (
            <div key={order.id} className={styles.orderItem}>
              <img
                src={order.imageUrl}
                alt={order.product}
                className={styles.orderImage}
              />
              <div className={styles.orderDetails}>
                <p className={styles.orderName}>{order.product}</p>
                <p className={styles.orderMeta}>
                  ₦{order.price.toLocaleString()} · x{order.quantity}
                </p>
              </div>
              <div className={styles.orderRight}>
                <span
                  className={`${styles.orderStatus} ${
                    order.status === 'Completed' ? styles.completed : styles.pending
                  }`}
                >
                  {order.status}
                </span>
                <p className={styles.orderDate}>{order.date}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.orderEmptyIcon}>
            <MdShoppingBag size={32} />
          </div>
          <h4 className={styles.orderEmptyTitle}>No Orders Yet?</h4>
          <p className={styles.orderEmptyText}>
            Add products to your store and start selling to see orders here.
          </p>
          <button className={styles.primaryButton}>New Product</button>
        </div>
      )}
    </DashboardCard>
  );
};

export default RecentOrders;