/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-16 11:24:56
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-24 19:16:55
 * @FilePath: \Web-learning\React\code\03_react脚手架\react_staging\src\App.jsx
 * @Description: 
 * 
 */
import React, { Component } from 'react'
import {Button} from 'antd'
import 'antd/dist/reset.css'

export default class App extends Component {

	
	render() {
		return (
			<div>
				00
				<button>点我</button>
				<Button type='primary'>按钮1</Button>
				<Button type='link'>按钮2</Button>
				<Button >按钮3</Button>
			</div>
		)
	}
}
