import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProfile from './AppProfile';
// import AppJSX from './AppJSX'; 문법
import reportWebVitals from './reportWebVitals';
import CounterBox from './components/CounterBox';
import AppProduct from './components/AppProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProfile />
    {/* 기본적 사용방법과 component의 이해 */}
    <CounterBox />
    {/* Props and State 의 응용과 연습 */}
    <AppProduct />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
