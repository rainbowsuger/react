import { INCREMENT, DECREMENT, ODDINCREMENT } from '../constant'

export const increment = (data) => ({type: INCREMENT, data})
export const decrement = (data) => ({type: DECREMENT, data})
// 异步action当中一般会调用同步action
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
        dispatch(increment(data))
    }, time)
  }
}
export const oddIncrement = data => ({type: ODDINCREMENT, data})