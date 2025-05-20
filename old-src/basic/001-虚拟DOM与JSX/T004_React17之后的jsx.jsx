import { jsx } from "react/jsx-runtime"
import ReactDOM from "react-dom/client";
import React from "react"


/*
  在 React17 之前 JSX 等同于 React.createElement
  在 React17 之后 JSX 使用 react/jsx-runtime 中的 jsx
  不过官方计划将 jsx 反向移植到 React17 之前的版本，所以后续可以只考虑 jsx
*/

// jsx 其实是一个函数调用
let myDiv = jsx("div", { children: "你好啊" })
console.log(myDiv)
/*
jsx创建的是一个简单的JS对象：
意图是描述DOM的结构，但其本身并不是DOM元素，没有DOM身上的那些属性和方法
      $$typeof: Symbol(react.element)
      key: null
      props: {children: '你好啊'}
      ref: null
      type: "div"
      _owner: null
      _store: {validated: false}
      _self: undefined
      _source: undefined
      [[Prototype]]: Object
*/

// 相当于
let myDiv2 = <div>你好啊</div>

const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(myDiv);
