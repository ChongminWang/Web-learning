/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-23 22:22:28
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-24 10:23:25
 * @FilePath: \Web-learning\React\code\03_react脚手架\react_staging\src\components\Search\index.jsx
 * @Description: 
 * 
 */
import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = ()=>{
        //获取用户输入(连续结构赋值+重命名)
        const {keyWordElement:{value:keyword}} = this
        // console.log(keyword)
        this.props.updataApp({isFirst:false,isLoading:true})
        //发送请求
        axios.get(`/api1/search/users?q=${keyword}`).then(
            response=>{
                this.props.updataApp({isLoading:false,users:response.data.items})
                console.log('成功了',response.data)
            },
            error=>{
                this.props.updataApp({isLoading:false,err:error.message})
                console.log(error)}
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input ref={c=>{this.keyWordElement = c}} type="text" placeholder="输入关键词点击搜索" />&nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
