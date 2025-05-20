import { INCREMENT, DECREMENT } from "./constant"
import store from "./store"


export const createIncrementAction = data => ({ type: INCREMENT, data})

export const createDecrementAction = data => ({type: DECREMENT, data})

export const createIncrementAsyncAction = (data, time) => {
  // 不用自己引入 store，在这里可以接收到一个 dispatch
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
      // 相当于
      // store.dispatch(createIncrementAction(data))
    }, time)
  }
}



