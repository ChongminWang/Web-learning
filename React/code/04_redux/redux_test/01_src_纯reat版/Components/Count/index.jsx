import React, { Component } from 'react'

export default class Count extends Component {
    state = { count: 0 }
    increment = () => {
        const { count } = this.state
        const {value} = this.selectNumber
        this.setState({ count: count + value * 1 })
    }
    decrement = () => {
        const { count } = this.state
        const {value} = this.selectNumber
        this.setState({ count: count - value * 1 })
    }
    incrementIFOdd = () => {
        const { count } = this.state
        const {value} = this.selectNumber
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 })
        }

    }
    incrementAsync = () => {
        const { count } = this.state
        const {value} = this.selectNumber
        console.log('开始前')
        setTimeout = (() => {
            this.setState({ count: count + value * 1 })
            console.log('开始后')
        }, 500)

    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
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
