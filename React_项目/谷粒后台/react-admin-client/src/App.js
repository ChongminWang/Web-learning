/**
 * 应用的根组件
 */

import React, { Component } from 'react'
import { Button } from 'antd'
// import 'antd/dist/antd.css'

export default class App extends Component {
    onbutton = () => {
        alert('Hello')
    }
    render() {
        return (
            <div>
                <Button type='primary' onClick={this.onbutton}>你好</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </div>
        )
    }
}
