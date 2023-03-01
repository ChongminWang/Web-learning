/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-03-01 20:50:13
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-03-01 20:56:07
 * @FilePath: \Web-learning\React\code\04_redux\redux_test\src\redux\count_action.js
 * @Description: 
 * 
 */
/***
 * 该文件为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from './constant'
export const createIncrementAction = (data)=>({type: INCREMENT,data})
export const createDecrementAction = (data)=>({type: DECREMENT,data})