import React from 'react';
import ReactDOM from 'react-dom/client';
import { StatsigClient } from '@statsig/js-client';
import { StatsigProvider } from '@statsig/react-bindings';
import App from './App';
import './styles.css';

const clientKey = import.meta.env.VITE_STATSIG_CLIENT_KEY || 'client-replace-me';

const statsigClient = new StatsigClient(clientKey, {
  userID: 'demo-user',
  email: 'demo@example.com',
});

statsigClient.initializeAsync().catch((error) => {
  console.warn('Statsig init failed, defaulting to gate=false', error);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StatsigProvider client={statsigClient}>
      <App />
    </StatsigProvider>
  </React.StrictMode>,
);
