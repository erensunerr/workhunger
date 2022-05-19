import * as ReactDOM from 'react-dom/client';
import React from 'react';
import App from './app';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))


console.log('rerender index')
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
