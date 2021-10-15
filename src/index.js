import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
import {createStore, applyMiddleware} from 'redux'
import { reducer } from './reducer';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';       //used to use thunk with devtools


const middlewares = [thunk];

const store= createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))

ReactDOM.render(
  <React.StrictMode>
  
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
