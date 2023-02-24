/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-16 11:24:56
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-24 10:00:25
 * @FilePath: \Web-learning\React\code\03_react脚手架\react_staging\src\App.jsx
 * @Description: 
 * 
 */
import React, { Component } from 'react'

import List from './components/List'
import Search from './components/Search'


export default class App extends Component {

	state = {//初始化状态。users初始值为数组
		users:[],
		isFirst:true,
		isLoading:false,
		err:'',
	}
	

	updataApp = (stateObj)=>{
		this.setState({stateObj});
	}
	render() {
		// const {users} = this.state
		return (
			<div className="container">
				<Search updataApp={this.updataApp}/>
				<List users = {...this.state}/>
			</div>
		)
	}
}
