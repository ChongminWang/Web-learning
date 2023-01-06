/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-01-06 23:34:06
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-01-06 23:48:40
 * @FilePath: \Web-learning\Ajax\express框架\express基本使用.js
 * @Description: 
 * 
 */
//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装，response是对响应报文的封装
app.get('/', (request, response) => {
    //设置响应
    response.send('Hello Express');
});

//4.监听服务端口
app.listen(8000,()=>{
    console.log('服务已经启动 8000端口监听中......');
})