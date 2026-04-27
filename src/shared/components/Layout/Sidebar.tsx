import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import Logo from '../../../assets/MetricoLogo.png';
import { toggleSidebar, setActivePage } from '../../../app/store/slices/uiSlice';
import { 
  MdDashboard, 
  MdShoppingCart, 
  MdPeople, 
  MdInventory2, 
  MdChat, 
  MdSettings, 
  MdSupport, 
  MdLogout 
} from 'react-icons/md';
import NavItem from './NavItem';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);
  const activePage = useSelector((state: RootState) => state.ui.activePage);

  const handleNavClick = (page: string) => {
    dispatch(setActivePage(page));
  };

  return (
    <aside 
      className={`${styles.sidebar} ${!sidebarOpen ? styles.collapsed : ''}`}
      onMouseEnter={() => dispatch(toggleSidebar())}
      onMouseLeave={() => dispatch(toggleSidebar())}
    >
      <div className={styles.sidebarHeader}>
        <img src={Logo} alt="Metrico Logo" className={styles.logo} width={30} height={30} />      
        <h2 className={styles.appTitle}>Metrico</h2>
      </div>
      <nav className={styles.sidebarNav}>
        <ul className={styles.navList}>
          <NavItem icon={<MdDashboard />} label="Dashboard" showLabel={sidebarOpen} isActive={activePage === 'Dashboard'} onClick={() => handleNavClick('Dashboard')} />
          <NavItem icon={<MdShoppingCart />} label="Orders" showLabel={sidebarOpen} isActive={activePage === 'Orders'} onClick={() => handleNavClick('Orders')} />
          <NavItem icon={<MdPeople />} label="Customers" showLabel={sidebarOpen} isActive={activePage === 'Customers'} onClick={() => handleNavClick('Customers')} />
          <NavItem icon={<MdInventory2 />} label="Inventory" showLabel={sidebarOpen} isActive={activePage === 'Inventory'} onClick={() => handleNavClick('Inventory')} />
          <NavItem icon={<MdChat />} label="Conversations" showLabel={sidebarOpen} isActive={activePage === 'Conversations'} onClick={() => handleNavClick('Conversations')} />
          <NavItem icon={<MdSettings />} label="Settings" showLabel={sidebarOpen} isActive={activePage === 'Settings'} onClick={() => handleNavClick('Settings')} />
        </ul>
      </nav>
      <div className={styles.sidebarFooter}>
        <ul className={styles.navList}>
          <NavItem icon={<MdSupport />} label="Contact Support" showLabel={sidebarOpen} onClick={() => handleNavClick('Contact Support')} />
          <NavItem icon={<MdLogout />} label="Logout" showLabel={sidebarOpen} onClick={() => handleNavClick('Logout')} />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;