/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-18 10:16:57
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-18 10:23:27
 * @FilePath: \Web-learning\Promise\基本使用\5-utile.promisefangfa.js
 * @Description: 
 * 
 */
/**
 * util.promisify 方法
 */
//引入util模块
const util = require('util')
//引入fs
const fs = require('fs')
//返回一个新的函数
let myReadFile = util.promisify(fs.readFile);

myReadFile('./resource/content.txt').then(value=>{
    console.log(value.toString())
})
