import React, { useState, useEffect } from "react";
import ReactDOM, { flushSync } from "react-dom";

/*
使用hook时必须遵守的规则：
  请不要在循环、条件或者嵌套函数中调用 Hooks
  都有在 React 函数中才去调用 Hooks

Hooks 的状态管理都是依赖数组的

useState(返回初始值的函数)
注：这个函数需要是同步的

*/

const Count = () => {
  const [x, setX] = useState(0);

  const y = x + 1;
  // x = x + 1;

  const m = 3; // 常量

  useEffect(() => {
  }, [x]);

  return (
    <div>
      <div>x={x}</div>
      <div onClick={() => setX(x - 1)}>y={x + 1}</div>
      <button onClick={() => setX(x + 1)}>增加</button>
      <button onClick={() => setX(x - 1)}>减少</button>
    </div>
  );
};

const app = (
  <div>
    <Count/>
  </div>
);

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(app);
