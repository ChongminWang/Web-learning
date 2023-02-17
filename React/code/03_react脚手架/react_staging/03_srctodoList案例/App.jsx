/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-16 11:24:56
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-16 18:46:34
 * @FilePath: \Web-learning\React\code\03_react脚手架\react_staging\src\App.jsx
 * @Description: 
 * 
 */
//创建’外壳‘组件App
import React,{Component} from 'react';
import Header from './Components/Header';
import List from './Components/List';
import Footer from './Components/Footer';

import './App.css'


export default class App extends Component {
    //状态在哪里，操作状态的方法就在哪里
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打豆豆',done:true},
    ]};
    //addTodo用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj)=>{
        //获取原todos
        const {todos}= this.state
        //追加一个todo
        const newTodos = [todoObj,...todos]
        //更新状态
        this.setState({todos:newTodos});
    }
    //用于勾选和取消勾选todo，更新一个todo对象
    updateTodo = (id,done)=>{
        //获取状态中的todos
        const { todos } = this.state
        //匹配处理数据
        const newsTodos=  todos.map((todoObj)=>{
            if(todoObj.id===id){
                return {...todoObj, done}
            }else{
                return todoObj
            }
        });
        this.setState({todos:newsTodos})
    }
    //用于删除一个todo对象
    deleteTodo=(id)=>{
        const {todos} = this.state
        const newTodos =  todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }
    //更新checkbox的回调
    checkBox=(done)=>{
        const { todos } = this.state
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }
    //清除所有已完成的
    clearAllDon=()=>{
        const { todos } = this.state
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }
    render() {
        const {todos} = this.state
        return (
            <div classsName="todo-container">
                <div classsName="todo-wrap">
                <Header addTodo={this.addTodo} />
                <List todos={todos}  updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer todos={todos} checkBox={this.checkBox} clearAllDon={this.clearAllDon}/>
                </div>
            </div>
        )
    }
}
