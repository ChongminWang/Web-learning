/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-26 15:33:22
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-03-03 21:11:13
 * @FilePath: \Web-learning\React\code\04_redux\redux_test\src\Components\Count\index.jsx
 * @Description: 
 * 
 */
import React, { Component } from 'react'

export default class Count extends Component {
    state = { }

    increment = () => {
        const {value} = this.selectNumber
        

    }
    decrement = () => {
        const {value} = this.selectNumber
        
    }
    incrementIFOdd = () => {
        const {value} = this.selectNumber
        

    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        

    }
    render() {
        return (
            <div>
                <h1>当前求和为：{}</h1>
                <select ref={c => { this.selectNumber = c }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIFOdd}>奇数加</button>
                <button onClick={this.incrementAsync}>异步加</button>

            </div>
        )
    }
}
