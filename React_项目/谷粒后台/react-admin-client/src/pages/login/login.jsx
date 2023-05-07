import React, { Component } from 'react'
import './login.less'
import logo from './images/logo.png'
import { Button, Form, Input, Icon, message } from 'antd';
import {reqLogin} from '../../api'
// import { message } from 'antd';
/**
 * 登录的路由组件
 */
class Login extends Component {
    handleSubmit = (event) => {
        //阻止事件的默认行为
        event.preventDefault()
        //对表单字段进行校验
        this.props.form.validateFields(async (err,values) =>{
            if(!err){
                // console.log(values)
                const {username,password} = values
                const result = await reqLogin(username,password)
                // console.log('成功',response.data)
                if(result.status===0){//0登录成功，1登录失败
                    message.success('登陆成功')
                    //跳转 不需要回退回来，所以用replace
                    this.props.history.replace('/')
                }else{
                    message.error(result.message)
                }
            }else{
                console.log('失败')
            }
        })
        const form = this.props.form
        const values = form.getFieldsValue()
        console.log('submit()', values)
    }

    //对密码进行自定义验证
    validatePwd = (rule, value, callback) => {
        console.log('validatePwd()', rule, value)
        if(!value){
            callback('密码必须输入')
        }else if(value.length <4){
            callback('密码不能小于4位')
        }else if(value.length>12){
            callback('密码不能大于12位')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('密码必须是英文、数字或下划线组成')
        }
        else{
            callback()//验证通过
        }
    }

    render() {
        //得到强大功能的from对象
        const form = this.props.form
        const { getFieldDecorator } = form
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt='logo'></img>
                    <h1>React项目: 后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                /*
                            用户名/密码的的合法性要求
                                1). 必须输入
                                2). 必须大于等于4位
                                3). 必须小于等于12位
                                4). 必须是英文、数字或下划线组成
                               */
                            }
                            {
                                getFieldDecorator('username', { // 配置对象: 属性名是特定的一些名称
                                    // 声明式验证: 直接使用别人定义好的验证规则进行验证
                                    rules: [
                                        { required: true, whitespace: true, message: '用户名必须输入' },
                                        { min: 4, message: '用户名至少4位' },
                                        { max: 12, message: '用户名最多12位' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                                    ],
                                    initialValue: 'admin', // 初始值
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        {
                                            //自定义验证
                                            validator: this.validatePwd
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>

                </section>
            </div>
        )
    }
}

/**
 * 1.高阶函数
 *  一类特别的函数
 *      接收函数类型的函数
 *      返回值是函数
 *  常见
 *      定时器setTimeout()/setInterval()
 *      promise  执行成功和失败的回调
 *      数组相关的方法：foreach /filter / reduce/ map
 *      fn.bind()
 *  高阶函数更新动态，更加具有扩展性
 * 2.高阶组件
 *  本质是一个函数
 *  接收一个组件，返回一个新的组件，新组建内部会被传入特定属性
 *  作用：扩展组件的功能
 *  高阶组件也是高阶函数，接收一个组件函数，返回一个新的组件函数
 */

/**包装From组件生成一个新的组件Form（Login）
 * 新组件会向From组件传递一个强大的对象属性：form
 */
const WrapLogin = Form.create()(Login)
export default WrapLogin
/**
 * 1.前台表单验证
 * 2.收集表单输入数据
 */

/**
 * async 与 await
 * 作用：
 *      简化promise对象的使用，不再使用then（）来指定成功和失败的回调函数，以同步编码的方式实现异步流程
 * 哪里写await：
 *      在返回的promise的表达式左侧写await：不要想promise，想要promise异步执行的成功的value数据
 * 哪里写async
 *      await所在函数（最近的）定义的左侧写async
 */