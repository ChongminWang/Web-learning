/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-03-03 21:39:59
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-03-04 11:44:46
 * @FilePath: \Web-learning\React\code\04_redux\redux_test\7_src_react-redux_数据共享版\App.jsx
 * @Description: 
 * 
 */
import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {
	render() {
		return (
			<div> 
				<Count/>
				<hr/>
				<Person/>
			</div>
		)
	}
}
