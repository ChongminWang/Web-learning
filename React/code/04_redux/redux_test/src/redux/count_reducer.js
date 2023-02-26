
const initdata = 0
export default function countReducer(prev = initdata, ation) {
    const { type, data } = ation
    switch (type) {
        case 'increment':
            return prev + data*1
        case 'decrement':
            return prev - data*1
        default:
            return prev
    }
}
