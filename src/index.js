import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';

const root = document.getElementById("root");
console.log(root);

ReactDOM.createRoot(root).render(
  <>
    <App />
  </>,  
);