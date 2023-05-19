import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppPointer from './components/AppPointer';
import AppMatch from './components/AppMatch';
import AppScore from './components/AppScore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppPointer />
    {/* Browser Event */}
    <AppMatch />
    {/* 중첩 Object와 onClick 심화 */}
    <AppScore />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
