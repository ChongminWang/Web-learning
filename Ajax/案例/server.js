/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-01-07 10:13:38
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-01-07 20:00:20
 * @FilePath: \Web-learning\Ajax\案例\server.js
 * @Description: 
 * 
 */
//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装，response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    //设置响应
    response.send('Hello Ajax -2');
});
//all 可以接受任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应
    response.send('Hello Ajax Post');
});

app.all('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data={
        name:'书悟空'
    }
    //对对象进行字符串转化
    let str = JSON.stringify(data);
    //设置响应
    response.send(str);
});

//jQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
    
});

//延时响应
app.all('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    setTimeout(()=>{
        //设置响应
        response.send('延时响应');
    },3000)
    
});

//4.监听服务端口
app.listen(8000,()=>{
    console.log('服务已经启动 8000端口监听中......');
})