const fs = require('fs')

//回调函数 形式
fs.readFile('./resource/content.txt',(err, data) =>{
    //出错，则抛出错误
    if(err) throw err
    //成功则输出内容
    console.log(data)
})

//Promise 形式
let p = new Promise((resolve, reject) =>{
    fs.readFile('./resource/content.txt',(err, data)=>{
        if(err) reject(err)
        resolve(data)
    })
})
//调用then方法
p.then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})