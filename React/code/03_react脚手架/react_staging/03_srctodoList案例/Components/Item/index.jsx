/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-16 15:01:06
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-16 19:31:49
 * @FilePath: \Web-learning\React\code\03_react脚手架\react_staging\src\Components\Item\index.jsx
 * @Description: 
 * 
 */
import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {mouse:false}//鼠标标识移入移出
  //鼠标移入移出的回调
  handleMouse=(flag)=>{
    return ()=>{
      // console.log(flag)o
      this.setState({mouse:flag});
    }
  }
  //勾选、取消勾选某一个todo的回调
  handleCheck=(id)=>{
    return (event)=>{
      // console.log(id,event.target.checked)
      this.props.updateTodo(id,event.target.checked)
    }
  }
  //删除一个todo的回调
  handleDelet=(id)=>{
    return ()=>{
      if(window.confirm('确定删除吗？')){
        this.props.deleteTodo(id)
      }
    }
    
  }
  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return ( 
      <li style={{backgroundColor:mouse? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
            <span>{name}</span>
          </label>
          <button onClick={this.handleDelet(id)} classsName="btn btn-danger" style={{ display:mouse?'block': 'none' }}>删除</button>
      </li> 
    )
  }
}
