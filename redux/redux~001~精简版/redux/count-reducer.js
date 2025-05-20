const initState = 0;

// (state, action) => newState
// state 描述状态, 应该只包含普通的 JS 对象、数组和原语
// action 描述发生了什么事
//! 不应该改变 state 对象，而是在 state 发生变化时返回一个新对象
export default function countReducer(preState = initState, action) {
  console.log('countReducer@', preState, action);

  // if(preState === undefined) preState = 0;
  const { type, payload } = action;
  switch (type) {
    case 'increment':
      return preState + payload;
    case 'decrement':
      return preState - payload;
    default:
      return preState;
  }
}
