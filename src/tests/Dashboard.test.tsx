import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '../store';
import Dashboard from '../pages/Dashboard';

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
  it('renders dashboard title', () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});