import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import './assets/styles/main.scss';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain='dev-juq1fm6nzdcuf74q.us.auth0.com'
        clientId='g9lB0F9eC92Cls2JA1I7vhwKpNyRbSDg'
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
