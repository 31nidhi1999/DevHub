import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './app/store.ts';
import { Provider } from 'react-redux';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

const client = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
