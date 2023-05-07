/**
 * 能发送异步ajax请求的函数模块
 * 函数的返回值是promise
 * 
 * 优化：统一处理请求异常?
 *      在外层包一个自己创建的promise对象
 *      在请求出错时，不reject（error），而是显示错误信息
 *  优化：异步得到的不是response，而是response.data
 *      在请求成功时，返回response.data
 */

import axios from 'axios'
import {message} from 'antd'
export default function ajax(url, data={}, type='GET'){
    return new Promise((resolve, reject)=>{
        let promise
        if(type === 'GET'){
            promise = axios.get(url, {params: data})
        }else{
            promise = axios.post(url, {params: data})
        }
        promise.then(response=>{
            resolve(response.data)
        }).catch(error=>{
            message.error('请求出错'+ error.message)
        })
    })
    
}