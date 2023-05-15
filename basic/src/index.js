import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProfile from './AppProfile';
// import AppJSX from './AppJSX'; 문법
import reportWebVitals from './reportWebVitals';
import CounterBox from './components/CounterBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProfile />
    <CounterBox />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
