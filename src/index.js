import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style.js';
import IconStyle from './statics/iconfont/iconfont'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Fragment>
    <GlobalStyle></GlobalStyle>
    <IconStyle></IconStyle>
    <App />
  </Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
