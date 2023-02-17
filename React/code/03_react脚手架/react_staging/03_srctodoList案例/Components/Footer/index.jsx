/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-16 15:01:06
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-16 19:15:48
 * @FilePath: \Web-learning\React\code\03_react脚手架\react_staging\src\Components\Footer\index.jsx
 * @Description: 
 * 
 */
import React, { Component } from 'react';
import './index.css'

export default class Footer extends Component {
    //全选checkbox的回调
    handleCheckAll = (event)=>{
        this.props.checkBox(event.target.checked)
    }
    //清除所有的任务
    handleClear = ()=>{
        this.props.clearAllDon()
    }
    render() {
        const { todos } = this.props
        //已完成的个数
        const donCount = todos.reduce((pre,todo)=>{
            return (pre+(todo.done? 1:0))
        },0)
        // console.log(donCount) 
        //总数
        const totall = todos.length
        return (
            <div classsName="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={donCount ===totall && totall!==0 ?true :false}/>
                </label>
                <span>
                    <span>已完成{donCount}</span> / 全部{totall}
                </span>
                <button onClick={this.handleClear} classsName="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
