import {
  MdSearch,
  MdFilterList,
  MdShare,
  MdMoreHoriz,
  MdInventory2,
} from 'react-icons/md';
import styles from './Inventory.module.css';

const summaryCards = [
  {
    title: 'All Products',
    value: '350',
    label: 'Active 316',
    highlight: true,
  },
  {
    title: 'Low Stock Alert',
    value: '23',
    label: 'This Week',
    warning: true,
  },
  {
    title: 'Expired',
    value: '3',
    label: 'This Week',
  },
  {
    title: '1 Start Rating',
    value: '2',
    label: 'This Week',
  },
];

const products = [
  {
    id: 1,
    name: 'iPhone 13 Pro',
    category: 'Gadgets',
    price: '₦1,225,000.00',
    stock: '8',
    discount: '₦40.00',
    total: '₦50,000.00',
    status: 'Published',
    action: 'Unpublish',
  },
  {
    id: 2,
    name: 'iPhone 12 Pro',
    category: 'Gadgets',
    price: '₦725,000.00',
    stock: '12',
    discount: '₦40.00',
    total: '₦50,000.00',
    status: 'Published',
    action: 'Unpublish',
  },
  {
    id: 3,
    name: 'Polo T-Shirt',
    category: 'Fashion',
    price: '₦125,000.00',
    stock: '120',
    discount: '₦40.00',
    total: '₦50,000.00',
    status: 'Unpublished',
    action: 'Publish',
  },
  {
    id: 4,
    name: 'Polo T-Shirt',
    category: 'Fashion',
    price: '₦125,000.00',
    stock: 'Out of Stock',
    discount: '₦40.00',
    total: '₦0.00',
    status: 'Unpublished',
    action: 'Publish',
  },
  {
    id: 5,
    name: 'iPhone 13 Pro',
    category: 'Gadgets',
    price: '₦1,225,000.00',
    stock: '8',
    discount: '₦40.00',
    total: '₦50,000.00',
    status: 'Published',
    action: 'Unpublish',
  },
  {
    id: 6,
    name: 'iPhone 12 Pro',
    category: 'Gadgets',
    price: '₦725,000.00',
    stock: '12',
    discount: '₦40.00',
    total: '₦50,000.00',
    status: 'Published',
    action: 'Unpublish',
  },
];

const Inventory = () => {
  return (
    <div className={styles.inventoryPage}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.breadcrumb}>Home / Inventory</p>
          <h2 className={styles.pageTitle}>Inventory</h2>
        </div>
        <button type="button" className={styles.primaryButton}>
          <MdInventory2 size={20} />
          Add a New Product
        </button>
      </div>

      <section className={styles.summarySection}>
        <div className={styles.summaryCardLarge}>
          <div className={styles.summaryLargeHeader}>
            <span className={styles.summaryIcon}>
              <MdInventory2 size={20} />
            </span>
            <div>
              <p className={styles.summaryLabel}>All Products</p>
              <p className={styles.summaryValue}>350</p>
              <p className={styles.summaryMeta}>Active 316</p>
            </div>
          </div>
        </div>
        <div className={styles.summaryGrid}>
          {summaryCards.slice(1).map((card) => (
            <div
              key={card.title}
              className={`${styles.summaryCardSmall} ${card.warning ? styles.summaryWarning : ''}`}
            >
              <div className={styles.summarySmallHeader}>
                <p className={styles.summarySmallTitle}>{card.title}</p>
                <span className={styles.smallLabel}>{card.label}</span>
              </div>
              <p className={styles.summarySmallValue}>{card.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.tablePanel}>
        <div className={styles.tableHeader}>
          <h3 className={styles.tableTitle}>Inventory Items</h3>
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
                <th>Product Name</th>
                <th>Category</th>
                <th>Unit Price</th>
                <th>In-Stock</th>
                <th>Discount</th>
                <th>Total Value</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className={styles.productCell}>
                    <div className={styles.productPreview} />
                    <span>{product.name}</span>
                  </td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.discount}</td>
                  <td>{product.total}</td>
                  <td>
                    <button type="button" className={styles.actionButton}>
                      {product.action}
                    </button>
                  </td>
                  <td>
                    <span className={`${styles.statusBadge} ${
                      product.status === 'Published' ? styles.published : styles.unpublished
                    }`}
                    >
                      {product.status}
                    </span>
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

export default Inventory;
