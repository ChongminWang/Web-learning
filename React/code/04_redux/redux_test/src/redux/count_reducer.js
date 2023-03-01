import {INCREMENT,DECREMENT} from './constant'
const initdata = 0
export default function countReducer(prev = initdata, ation) {
    const { type, data } = ation
    switch (type) {
        case INCREMENT:
            return prev + data*1
        case DECREMENT:
            return prev - data*1
        default:
            return prev
    }
}
