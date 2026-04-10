import {
  MdPersonAdd,
  MdSearch,
  MdFilterList,
  MdShare,
  MdMoreHoriz,
} from 'react-icons/md';
import styles from './Customers.module.css';

const customers = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: 'Janet Adebayo',
  email: 'janet.a@mail.com',
  phone: '+2348065560633',
  orders: 10,
  total: '₦250,000.00',
  since: '12 Aug 2022 - 12:25 am',
  status: 'Active',
}));

const summaryCards = [
  { title: 'All Customers', value: '1,250', label: '+15.80%', highlight: true },
  { title: 'Active', value: '1,180', label: '+8.5%' },
  { title: 'In-Active', value: '70', label: '-10%' },
  { title: 'New Customers', value: '30', label: '-20%' },
  { title: 'Purchasing', value: '657', label: '' },
  { title: 'Abandoned Carts', value: '5', label: '' },
];

const Customers = () => {
  return (
    <div className={styles.customersPage}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.breadcrumb}>Home / Customers</p>
          <h2 className={styles.pageTitle}>Customers</h2>
        </div>
        <button type="button" className={styles.primaryButton}>
          <MdPersonAdd size={20} />
          Add a New Customer
        </button>
      </div>

      <section className={styles.summarySection}>
        <div className={styles.summaryIntro}>
          <p className={styles.sectionLabel}>Customers Summary</p>
          <p className={styles.sectionDescription}>
            Track customer growth and retention across your store.
          </p>
        </div>
        <div className={styles.summaryGrid}>
          {summaryCards.map((card) => (
            <div
              className={`${styles.summaryCard} ${card.highlight ? styles.highlightCard : ''}`}
              key={card.title}
            >
              <div className={styles.summaryHeader}>
                <p className={styles.cardTitle}>{card.title}</p>
                {card.title === 'All Customers' && (
                  <span className={styles.cardBadge}>This Week</span>
                )}
              </div>
              <p className={styles.cardValue}>{card.value}</p>
              {card.label && <p className={styles.cardLabel}>{card.label}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.tablePanel}>
        <div className={styles.tableHeader}>
          <div>
            <h3 className={styles.tableTitle}>Customers</h3>
          </div>
          <div className={styles.tableActions}>
            <button type="button" className={styles.iconButton}>
              <MdSearch />
              Search
            </button>
            <button type="button" className={styles.iconButton}>
              <MdFilterList />
              Filter
            </button>
            <button type="button" className={styles.iconButton}>
              <MdShare />
              Share
            </button>
            <button type="button" className={styles.iconButton}>
              <MdMoreHoriz />
              Bulk Action
            </button>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th />
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Orders</th>
                <th>Order Total</th>
                <th>Customer Since</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.orders}</td>
                  <td>{customer.total}</td>
                  <td>{customer.since}</td>
                  <td>
                    <span className={styles.statusBadge}>{customer.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.tableFooter}>
          <div className={styles.footerLeft}>10 items per page</div>
          <div className={styles.footerRight}>1-10 of 200 items</div>
        </div>
      </section>
    </div>
  );
};

export default Customers;
