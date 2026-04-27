import { useSelector } from 'react-redux';
import type { RootState } from './store';
import MainLayout from '../shared/components/MainLayout';
import Dashboard from '../features/dashboard/Dashboard';
import Orders from '../features/orders/Orders';
import Customers from '../features/customers/Customers';
import Inventory from '../features/inventory/Inventory';
import Settings from '../features/settings/Settings';
import Auth from '../features/auth/Auth';

function App() {
  const activePage = useSelector((state: RootState) => state.ui.activePage);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Auth />;
  }

  const renderPage = () => {
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Orders':
        return <Orders />;
      case 'Customers':
        return <Customers />;
      case 'Inventory':
        return <Inventory />;
      case 'Settings':
        return <Settings />;
      default:
        return (
          <div style={{ padding: 24 }}>
            <h2>{activePage}</h2>
            <p style={{ color: 'var(--text)', maxWidth: 640, marginTop: 12 }}>
              This section is not built yet, but the sidebar selection is working.
            </p>
          </div>
        );
    }
  };

  return <MainLayout>{renderPage()}</MainLayout>;
}

export default App;
