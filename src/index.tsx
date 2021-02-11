import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.scss';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
