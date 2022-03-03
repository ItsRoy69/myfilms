import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

import { Store } from './Components/Redux/Store/Store.js';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <>
      <BrowserRouter store={Store}>
        <App />
      </BrowserRouter>
    </>,
  document.getElementById('root')
);
