/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-03-01 20:50:13
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-03-01 21:14:01
 * @FilePath: \Web-learning\React\code\04_redux\redux_test\src\redux\count_action.js
 * @Description: 
 * 
 */
/***
 * 该文件为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from './constant'

//同步action，返回的为Object一般对象
export const createIncrementAction = (data)=>({type: INCREMENT,data})
export const createDecrementAction = (data)=>({type: DECREMENT,data})
//所谓的异步action，就是指action的值为函数  异步action中一般都会调用
export const createIncrementAsyncAction = (data,time) => {
    return ()=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data));
        },time)
    }