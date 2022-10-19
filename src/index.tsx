import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Main from './pages/Main/Main';
import About from 'pages/About';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
