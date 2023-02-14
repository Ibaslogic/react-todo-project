import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import TodoApp from '@/components/TodoApp';

import '@/styles/app.css';
// import './styles/app.css';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>
);
