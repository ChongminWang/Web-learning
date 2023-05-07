/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-03-08 10:50:59
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-03-11 10:57:25
 * @FilePath: \Web-learning\React_项目\谷粒后台\react-admin-client\src\App.js
 * @Description: 
 * 
 */
/**
 * 应用的根组件
 */

import React, { Component } from 'react'
// import { Button } from 'antd'
// import 'antd/dist/antd.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>

            </BrowserRouter>
        )
    }
}
