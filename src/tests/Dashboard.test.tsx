import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '../app/store/index.ts';
import Dashboard from '../features/dashboard/Dashboard';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const renderWithProviders = (component: React.ReactElement) => {
  const testQueryClient = createTestQueryClient();
  return render(
    <Provider store={store}>
      <QueryClientProvider client={testQueryClient}>
        {component}
      </QueryClientProvider>
    </Provider>
  );
};

describe('Dashboard', () => {
  it('displays loading state initially', () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText('Loading dashboard data…')).toBeInTheDocument();
  });

  it('renders metric cards after data loads', async () => {
    renderWithProviders(<Dashboard />);

    await waitFor(() => {
      expect(screen.getByText('Sales')).toBeInTheDocument();
      expect(screen.getByText('Customers')).toBeInTheDocument();
      expect(screen.getByText('All Orders')).toBeInTheDocument();
    });
  });

  it('renders dashboard sections', async () => {
    renderWithProviders(<Dashboard />);

    await waitFor(() => {
      expect(screen.getByText('Marketing')).toBeInTheDocument();
    }, { timeout: 3000 });

    await waitFor(() => {
      expect(screen.getByText('Summary')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('displays summary chart with data', async () => {
    renderWithProviders(<Dashboard />);

    await waitFor(() => {
      expect(screen.getByText('Sept 10')).toBeInTheDocument();
      expect(screen.getByText('Sept 11')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('shows recent orders with product details', async () => {
    renderWithProviders(<Dashboard />);

    await waitFor(() => {
      expect(screen.getByText('iPhone 13')).toBeInTheDocument();
      expect(screen.getByText('MacBook Pro')).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});