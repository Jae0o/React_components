import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import reportWebVitals from './reportWebVitals';
import AppPointer from './components/AppPointer';
import AppMatch from './components/AppMatch';
import AppScore from './components/AppScore';
import AppScoreUseReducer from './components/AppScoreUseReducer';
import AppUseImmer from './components/AppUseImmer';
import AppForm from './components/AppForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppPointer />
    {/* Browser Event */}
    <AppMatch />
    {/* 중첩 Object와 onClick 심화 */}
    <AppScore />
    {/* Array의 정리방법과 조건 연결 */}
    <AppScoreUseReducer />
    {/* use Reducer */}
    <AppUseImmer />
    {/* use Immer and install */}
    <AppForm />
    {/* React에서의 Form의 사용법 */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
