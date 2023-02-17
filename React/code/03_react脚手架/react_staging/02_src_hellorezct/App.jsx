//创建’外壳‘组件App
import React,{Component} from 'react';
import Hello from './Components/Hello/Hello';

export default class App extends Component {
    render() {
        return (
            <div>
                <Hello/> 
            </div>
        )
    }
}
