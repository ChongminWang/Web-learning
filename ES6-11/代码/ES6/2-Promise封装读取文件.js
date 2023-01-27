/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-01-27 15:22:43
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-01-27 15:23:51
 * @FilePath: \Web-learning\ES6-11\代码\ES6\2-Promise封装读取文件.js
 * @Description: 
 * 
 */
//1. 引入 fs 模块
const fs = require('fs');

//2. 调用方法读取文件
// fs.readFile('./resources/为学.md', (err, data)=>{
//     //如果失败, 则抛出错误
//     if(err) throw err;
//     //如果没有出错, 则输出内容
//     console.log(data.toString());
// });

//3. 使用 Promise 封装
const p = new Promise(function(resolve, reject){
    fs.readFile("./resources/为学.md", (err, data)=>{
        //判断如果失败
        if(err) reject(err);
        //如果成功
        resolve(data);
    });
});

p.then(function(value){
    console.log(value.toString());
}, function(reason){
    console.log("读取失败!!");
});
