import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Favicon from 'react-favicon';
import faviconUrl from './assets/favicon.png';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Favicon url={faviconUrl} />
    <App />
  </React.StrictMode>
);
