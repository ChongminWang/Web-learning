import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store';

//渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
store.subscribe(()=>{
	root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
})