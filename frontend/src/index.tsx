import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
