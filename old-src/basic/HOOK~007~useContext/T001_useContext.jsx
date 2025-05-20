import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import styled from "styled-components";

// 创建一个上下文
// 可以给 createContext 传递一个值, 当做找不到Provider时的默认值, 默认值从不改变
const Store = createContext();

const ComA = () => {
  // 使用这个上下文
  const store = useContext(Store);

  return (
    <div>
      <div>name = {store.name}</div>

      {/* Consumer模式 */}
      <Store.Consumer>{(obj) => obj.age}</Store.Consumer>
    </div>
  );
};

const ComB = () => {
  // 使用这个上下文
  const store = useContext(Store);

  return (
    <div>
      <div>age = {store.age}</div>
    </div>
  );
};

const App = () => {
  const [storeState, setStoreState] = useState({
    name: "张三",
    age: 18,
  });

  return (
    // provider 为其子组件提供对应的上下文
    <Store.Provider value={storeState}>
      <ComA />
      <ComB />
    </Store.Provider>
  );
};

const mydiv = (
  <div>
    <App />
  </div>
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mydiv);
