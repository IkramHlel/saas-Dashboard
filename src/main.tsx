import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './styles/global.css'
import App from './App.tsx'
import { store } from './app/store/index.ts'
import { queryClient } from './app/queryClient.ts'

// Start MSW worker in development
if (import.meta.env.DEV) {
  import('./mocks/browser.ts').then(({ worker }) => {
    worker.start({
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    })
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
