/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-23 22:22:21
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-24 10:30:12
 * @FilePath: \Web-learning\React\code\03_react脚手架\react_staging\src\components\List\index.jsx
 * @Description: 
 * 
 */
import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const {users,isFirst,isLoading,err} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用</h2> : isLoading? <h2>Loading.</h2> : err ? <h2 style={{color:'red'}}>{err}</h2> :
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target="_blank">
                                    <img src={userObj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
