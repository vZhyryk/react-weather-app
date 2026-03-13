/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';
import ThemeProvider from './context/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <Toaster />
    </ThemeProvider>{' '}
  </React.StrictMode>,
  document.querySelector('#root')
);
