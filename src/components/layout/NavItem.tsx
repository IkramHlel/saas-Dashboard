import type { ReactNode } from 'react';
import styles from './NavItem.module.css';

interface NavItemProps {
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  showLabel?: boolean;
  isActive?: boolean;
}

const NavItem = ({ icon, label, href = '#', onClick, showLabel = true, isActive = false }: NavItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
  };

  return (
    <li className={styles.navItem}>
      <a href={href} className={`${styles.navLink} ${isActive ? styles.active : ''}`} onClick={handleClick}>
        <span className={styles.icon}>{icon}</span>
        {showLabel && <span className={styles.label}>{label}</span>}
      </a>
    </li>
  );
};

export default NavItem;