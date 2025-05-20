import { createStore } from 'redux';
// 引入 reducer
import countReducer from './count-reducer.js';

// createStore 用于创建 redux 中的store对象
// 创建 store 需要一个 reducer
const store = createStore(countReducer);

/*

redux的基本使用流程：
    store                     存储state，使用 createStore + reducer 创建
    store.subscribe(func)     当状态变化的时候会触发func函数
    store.dispatch(action)    派发action，可能会改变state
    action                    要派发的任务，要求一定要有 type属性
    reducer                   根据action决定state的变化
    combineReducers           合并多个 reducer 为一个
*/

/*
  store.getState          获取当前状态
  store.dispatch          分发
  store.subscribe         订阅
  store.replaceReducer    替换 reducer
*/

export default store;
