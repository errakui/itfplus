import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'pdfjs-dist/build/pdf.worker.entry';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);