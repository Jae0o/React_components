import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppWrap from './components/AppWrap';
import AppDarkMode from './components/AppDarkMode';
// import AppPerformanceTest from './components/AppPerformanceTest';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrap />
    {/* Component의 재사용 tip */}
    <AppDarkMode />
    {/* Context 사용방법과 Context umbrella 만들기 */}
    {/* <AppPerformanceTest /> */}
    {/* 성능 개선 실험 */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
