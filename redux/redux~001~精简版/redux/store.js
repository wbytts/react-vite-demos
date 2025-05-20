import { createStore } from 'redux';
// 引入 reducer
import countReducer from './count-reducer.js';

// createStore 用于创建 redux 中的store对象
// 创建 store 需要一个 reducer
const store = createStore(countReducer);
console.log("store", store)

/*
    store 的属性
        @@observable
        replaceReducer：替换reducer
        getState：获取 state
        dispatch：派发任务, 改变内部状态的唯一方法是 dispatch 一个 action
        subscribe：订阅state变化, 执行回调函数
*/

/*
redux的基本使用流程：
    创建 store 存储state，使用 createStore + reducer 创建
    订阅变化 store.subscribe(func)  ：当状态变化的时候会触发func函数
    派发任务 store.dispatch(action) ：派发action，可能会改变state

    state：存储状态
    action：要派发的任务，要求一定要有 type属性
    reducer：根据action决定state的变化

    combineReducers：合并多个 reducer 为一个

    运行逻辑：
        UI产生行为 -> 发出event -> dispatch任务 -> 创建action -> 执行reducer -> 通知订阅者 -> 更新UI
*/

export default store;
