import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './Context/UserContext';
import { CharProvider } from './Context/CharContext';


ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>

      <CharProvider>

        <App />

      </CharProvider>

    </UserContextProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
