import React, { useState, useEffect, useRef, useMemo, useReducer } from "react";
import ReactDOM from "react-dom/client";

/*
语法
  const [state, dispatch] = useReducer(reducer, initialArg, init?)

  reducer：用于更新 state 的纯函数。参数为 state 和 action，返回值是更新后的 state
  initialArg：用于初始化 state 的任意值。初始值的计算逻辑取决于接下来的 init 参数
  init：用于计算初始值的函数。如果存在，使用 init(initialArg) 的执行结果作为初始值，否则使用 initialArg

  state 与 action 可以是任意合法值
  【不过一般都有一个约定(致敬 Redux)】 action 是一个对象，并且有一个 type 属性

  dispatch 函数允许你更新 state 并触发组件的重新渲染。它需要传入一个 action 作为参数
  React 会调用 reducer 函数以更新 state，reducer 函数的参数为当前的 state 与传递的 action

  如果你提供的新值与当前的 state 相同（使用 Object.is 比较），React 会 跳过组件和子组件的重新渲染，这是一种优化手段。
  虽然在跳过重新渲染前 React 可能会调用你的组件，但是这不应该影响你的代码。

  React 会批量更新 state。state 会在 所有事件函数执行完毕 并且已经调用过它的 set 函数后进行更新，
  这可以防止在一个事件中多次进行重新渲染。
  如果在访问 DOM 等极少数情况下需要强制 React 提前更新，可以使用 flushSync
*/

const xReducer = (x, action) => {
  switch (action.type) {
    case "add":
      return x + action.value
    case "minus":
      return x - action.value
    default:
      throw new Error()
  }
}

const App = props => {

  const [x, dispatch] = useReducer(xReducer, 0)

  return <div>
    <h1>{x}</h1>
    <button onClick={() => dispatch({ type: "add", value: 1 })}>ADD</button>
    <button onClick={() => dispatch({ type: "minus", value: 1 })}>MINUS</button>
  </div>;
};

const mydiv = (
  <div>
    <App/>
  </div>
);

const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
