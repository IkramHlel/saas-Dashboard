import { useSelector } from 'react-redux';
import type { RootState } from './store';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';
import Auth from './pages/Auth';

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
