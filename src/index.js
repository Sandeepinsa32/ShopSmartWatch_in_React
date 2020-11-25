import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './App';


function home(){





ReactDOM.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);
}

setInterval(home,1000);