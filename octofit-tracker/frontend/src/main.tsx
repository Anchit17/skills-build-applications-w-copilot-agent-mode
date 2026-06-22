import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME || '';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if (!codespaceName) {
  // Helpful console message when running locally without Codespaces
  // Avoids accidentally building undefined Codespaces URLs
  // (The API layer falls back to localhost when VITE_CODESPACE_NAME is unset.)
  // Keep this lightweight and non-blocking.
  // eslint-disable-next-line no-console
  console.info('VITE_CODESPACE_NAME is not set; using localhost API fallback.');
}
