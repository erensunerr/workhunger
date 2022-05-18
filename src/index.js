import * as ReactDOM from 'react-dom/client';
import React from 'react';
import App from './app';
import './index.css';
import TodoViewer from './todoViewer';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navigation from './navigation';
import TimeBlocking from './timeBlocking';

const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
