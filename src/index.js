import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* 
NOTE: If using SASS, will have to replace this with proper import.
This is necessary for React Bootstrap styling
*/
import 'bootstrap/dist/css/bootstrap.min.css'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

