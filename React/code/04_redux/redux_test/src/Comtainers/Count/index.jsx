//引入Count的UI组件
import CountUI from '../../Components/Count'
//引入store
// import store from '../../redux/store'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

function a (){
    return {n : 900}
}
function b (){
    return{jia:()=>{console.log(1)}}
}

export default connect(a,b)(CountUI)

