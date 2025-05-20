import { createStore, applyMiddleware } from 'redux';
// 引入 reducer
import countReducer from './count-reducer.js';

// 引入 redux-thunk，用于支持异步Action
import reduxThunk from 'redux-thunk';

// createStore 用于创建 redux中的store对象
const store = createStore(countReducer, applyMiddleware(reduxThunk));

/*
applyMiddleware(reduxThunk)
    让 store.dispatch 可以接收一个回调函数
    dispatch => { ... dispatch(xxx) ...}
*/

export default store;
