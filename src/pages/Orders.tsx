import {
  MdShoppingBag,
  MdSchedule,
  MdCheckCircle,
  MdCancel,
  MdRotateLeft,
  MdReportProblem,
  MdPeople,
} from 'react-icons/md';
import styles from './Orders.module.css';

const summaryCards = [
  {
    title: 'All Orders',
    value: '0',
    icon: <MdShoppingBag size={24} color="#2563eb" />,
  },
  {
    title: 'Pending',
    value: '0',
    icon: <MdSchedule size={24} color="#f59e0b" />,
  },
  {
    title: 'Completed',
    value: '0',
    icon: <MdCheckCircle size={24} color="#16a34a" />,
  },
  {
    title: 'Canceled',
    value: '0',
    icon: <MdCancel size={24} color="#ef4444" />,
  },
  {
    title: 'Returned',
    value: '0',
    icon: <MdRotateLeft size={24} color="#8b5cf6" />,
  },
  {
    title: 'Damaged',
    value: '0',
    icon: <MdReportProblem size={24} color="#f97316" />,
  },
  {
    title: 'Abandoned Cart',
    value: '0',
    icon: <MdShoppingBag size={24} color="#0ea5e9" />,
  },
  {
    title: 'Customers',
    value: '0',
    icon: <MdPeople size={24} color="#0f766e" />,
  },
];

const Orders = () => {
  return (
    <div className={styles.ordersPage}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.breadcrumb}>Home / Orders</p>
          <h2 className={styles.pageTitle}>Orders</h2>
        </div>

        <button type="button" className={styles.primaryButton}>
          Create a New Order
        </button>
      </div>

      <section className={styles.summarySection}>
        <div className={styles.summaryIntro}>
          <p className={styles.sectionLabel}>Orders Summary</p>
          <p className={styles.sectionDescription}>
            Track order status across the store and see your sales pipeline at a glance.
          </p>
        </div>
        <div className={styles.summaryGrid}>
          {summaryCards.map((card) => (
            <div className={styles.summaryCard} key={card.title}>
              <div className={styles.cardHeader}>
                <p className={styles.cardTitle}>{card.title}</p>
                <span className={styles.cardIcon}>{card.icon}</span>
              </div>
              <p className={styles.cardValue}>{card.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.emptyState}>
        <div className={styles.emptyStateIcon}>
          <MdShoppingBag size={32} />
        </div>
        <h3 className={styles.emptyTitle}>No Orders Yet?</h3>
        <p className={styles.emptyText}>
          Add products to your store and start selling to see orders here.
        </p>
        <button type="button" className={styles.primaryButton}>
          New Product
        </button>
      </section>
    </div>
  );
};

export default Orders;
