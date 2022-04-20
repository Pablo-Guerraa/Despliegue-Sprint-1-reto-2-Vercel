import React from 'react';
import ReactDOM from 'react-dom/client';
// import styledComponents from 'styled-components';
import App from './Container/App';

// const GlobalStyle = styledComponents.div`
//     body{
//         font-family: 'Lato', sans-serif;
//         margin: 0;
//         padding: 0;
//         background: #F5F5F5;
//     }
    
// `;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

