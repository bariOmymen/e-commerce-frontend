import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store';
import {ProvideAuth } from './router-helper';
import {Web3ReactProvider} from '@web3-react/core'
import {getLibrary} from './providers'

//import Providers from './providers';


ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
  <Provider store={store}>
    <ProvideAuth>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProvideAuth>
  </Provider>
  </Web3ReactProvider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
