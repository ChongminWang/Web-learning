/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-16 10:29:57
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-16 10:44:26
 * @FilePath: \Web-learning\React\code\03_react脚手架\react_staging\src\index.js
 * @Description: 
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//与ReactDOM.render(){}一样
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
