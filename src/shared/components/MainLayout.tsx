import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { MdNotificationsNone, MdPerson, MdArrowDropDown } from 'react-icons/md';
import Sidebar from './Layout/Sidebar';
import { logout } from '../../app/store/slices/authSlice';
import styles from './MainLayout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();
  const activePage = useSelector((state: RootState) => state.ui.activePage);
  const userName = useSelector((state: RootState) => state.auth.user?.name ?? 'User');
  const [firstName] = userName?.split(' ') ?? [''];

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainColumn}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <p className={styles.breadcrumb}>Home / {activePage}</p>
            <h1>{activePage}</h1>
          </div>
          <div className={styles.headerActions}>
            <button type="button" className={styles.iconButton} aria-label="Notifications">
              <MdNotificationsNone />
            </button>
            <button type="button" className={styles.shopButton}>
              {firstName}'s Shop
              <MdArrowDropDown className={styles.shopChevron} />
            </button>
            <div className={styles.profileMenu}>
              <button type="button" className={styles.avatarButton} aria-label="Profile">
                <MdPerson className={styles.profileIcon} />
              </button>
              <div className={styles.profileDropdown}>
                <div className={styles.profileInfo}>
                  <span>{userName}</span>
                </div>
                <button type="button" className={styles.dropdownItem}>Account</button>
                <button type="button" className={styles.dropdownItem}>Settings</button>
                <button type="button" className={styles.dropdownItem} onClick={() => dispatch(logout())}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;