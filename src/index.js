import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';  

import App from './App';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//     <App data={{elements: 0}} />
// );


ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


