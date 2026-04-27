import { useDashboardStats } from './services/dashboardApi';
import { MdBarChart, MdPeople, MdShoppingBag, MdInventory2, MdShoppingCart } from 'react-icons/md';
import MetricCard from './components/MetricCard';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { data, isLoading, error } = useDashboardStats();
  const stats = data ?? {
    sales: 0,
    volume: 0,
    customers: 0,
    activeCustomers: 0,
    allOrders: 0,
    pending: 0,
    completed: 0,
    allProducts: 0,
    activeProducts: 0,
    abandonedCart: 0,
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.dashboardPage}>
      <div className={styles.cardsGrid}>
        <MetricCard
          items={[
            { label: 'Sales', value: `₦${stats.sales.toLocaleString()}` },
            { label: 'Volume', value: stats.volume },
          ]}
          icon={<MdBarChart size={22} color='#1C1D22' />}
        />

        <MetricCard
          items={[
            { label: 'Customers', value: stats.customers },
            { label: 'Active', value: stats.activeCustomers },
          ]}
          icon={<MdPeople size={22} color="#1C1D22" />}
        />

        <MetricCard
          items={[
            { label: 'All Orders', value: stats.allOrders },
            { label: 'Pending', value: stats.pending },
            { label: 'Completed', value: stats.completed },
          ]}
          icon={<MdShoppingBag size={22} color="#1C1D22" />}
        />
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>

          <div className={styles.markettingGrid}>
            <div className={styles.chartCard}>
              <div className={styles.chartHeader}>
                <div>
                  <p className={styles.chartHeaderTitle}>Marketing</p>
                  <p className={styles.cardTitle}>Acquisition · Purchase · Retention</p>
                </div>
                <span className={styles.chartHeaderLabel}>This Week</span>
              </div>
              <div className={styles.chartBody}>
                <div className={styles.chartPlaceholder}>
                  <div className={styles.bar} />
                  <div className={styles.bar} />
                  <div className={styles.bar} />
                  <div className={styles.bar} />
                  <div className={styles.bar} />
                </div>
              </div>
            </div>
            <div className={styles.markettingCards}>
              <MetricCard
                items={[
                  { label: 'All Products', value: stats.allProducts },
                  { label: 'Active', value: stats.activeProducts },
                  { label: 'Completed', value: stats.completed }
                ]}
                icon={<MdInventory2 size={22} color="#1C1D22" />}
              />
              <MetricCard
                items={[
                  { label: 'Abandoned Cart', value: stats.abandonedCart },
                  { label: 'Customers', value: stats.customers }
                ]}
                icon={<MdShoppingCart size={22} color="#1C1D22" />}
              />
            </div> 
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.summaryHeader}>
              <h3 className={styles.summaryLabel}>Summary</h3>
                <div>
                  <button className={styles.summarySelect}>Sales</button>
                  <button className={styles.summaryPeriod}>Last 7 Days</button>
                </div>
            </div>
            <div className={styles.barChart}>
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
              <div className={styles.barChartItem} />
            </div>
          </div>

        </div>

        <div className={styles.orderCard}>
          <div className={styles.chartHeader}>
            <h3 className={styles.chartHeaderTitle}>Recent Orders</h3>
          </div>
          <div className={styles.orderEmpty}>
            <div className={styles.orderEmptyIcon}>
              <MdShoppingBag size={32} />
            </div>
            <h4 className={styles.orderEmptyTitle}>No Orders Yet?</h4>
            <p className={styles.orderEmptyText}>
              Add products to your store and start selling to see orders here.
            </p>
            <button className={styles.primaryButton}>New Product</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;