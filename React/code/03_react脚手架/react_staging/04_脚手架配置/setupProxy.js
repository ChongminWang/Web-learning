/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-23 21:49:48
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-23 21:55:58
 * @FilePath: \Web-learning\React\code\03_react脚手架\react_staging\src\setupProxy.js
 * @Description: 
 * 
 */
const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{
            target:'http://localhost:5000',
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}