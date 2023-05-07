/**
 * 包含应用中所有接口的请求函数模块
 */
import ajax from './ajax'

const BASE = ''
export const reqLogin = (username, password)=> ajax(BASE + '/login',{username,password},'POST')

export const reqAdduser = (user)=> ajax(BASE + '/manage/user/add',user,'POST')