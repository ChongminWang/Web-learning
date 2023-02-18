/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-18 10:04:57
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-18 10:14:07
 * @FilePath: \Web-learning\Promise\基本使用\4-Promise封装练习.js
 * @Description: 
 * 
 */
/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数:  path  文件路径
 * 返回:  promise 对象
 */
function myReadFile(path){
    return new Promise((resolve, reject) => {
        //读取文件
        require('fs').readFile(path,(err,data)=>{
            //判断
            if(err) reject(err)
            //成功
            resolve(data)
        })
    })
}

//调用方法
myReadFile('./resource/content.txt').then((value)=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})