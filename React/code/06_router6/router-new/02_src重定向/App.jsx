/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-03-05 12:21:44
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-03-05 13:06:52
 * @FilePath: \Web-learning\React\code\06_router6\router-new\src\app.jsx
 * @Description: 
 * 
 */
import React from 'react'
import {NavLink,Routes,Route,Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
    return (
        <div>
			<div className="row">
				<div className="col-xs-offset-2 col-xs-8">
					<div className="page-header"><h2>React Router Demo</h2></div>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-2 col-xs-offset-2">
					<div className="list-group">
						{/* 路由链接 */}
						<NavLink className="list-group-item" to="/about">About</NavLink>
						<NavLink className="list-group-item" to="/home">Home</NavLink>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="panel">
						<div className="panel-body">
							{/* 注册路由 */}
							<Routes>
								<Route path="/about" element={<About/>}/>
								<Route path="/home" element={<Home/>}/>
								<Route path="/" element={<Navigate to='/about'/>}/>
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
