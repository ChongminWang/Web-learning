/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-18 16:42:22
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-18 20:56:07
 * @FilePath: \Web-learning\Promise\async和await\4-async与await结合.js
 * @Description: 
 * 
 */
/**
 * resource  1.html  2.html 3.html 文件内容
 */

// async 与 await
const fs = require('fs');
const util = require('util');
const myfile = util.promisify(fs.readFile)

async function main() {
    try {
        let data1 = await myfile('./resource/1.html')
        let data2 = await myfile('./resource/2.html')
        let data3 = await myfile('./resource/3.html')

        console.log(data1 + data2 + data3)
    }catch (e) {
        console.log(e.message)
    } 
}
main()
