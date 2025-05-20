import React, { useState, useEffect, useRef, useReducer } from "react";
import ReactDOM from "react-dom/client";

// 存储类
class Store {
  constructor() {
    this.name = "张三";
    this.age = 19;
    this.listeners = [];
  }

  subscribe = (listener) => {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((lis) => lis !== listener);
    };
  };

  // 希望组件更新
  updateApp = () => {
    this.listeners.forEach((lis) => lis());
  };

  addAge = () => {
    console.log("addAge", this);
    this.age++;
  };

  getPublicStore = () => {
    return {
      subscribe: this.subscribe,
      updateApp: this.updateApp,
      name: this.name,
      age: this.age,
      addAge: this.addAge,
    };
  };
}

// 使用存储类(单例)
function useStore(store) {
  // 创建一个 ref 用于保存 store 的引用
  // useRef 在不同次渲染之间共享
  const storeRef = useRef();

  // 实现单例, 不会重复创建 store
  if (!storeRef.current) {
    if (store) {
      storeRef.current = store;
    } else {
      const store = new Store();
      storeRef.current = store.getPublicStore();
    }
  }

  return storeRef.current;
}

const App = (props) => {
  const [tick, setTick] = useState(0);
  const forceUpdate = () => setTick(tick+1)
  const store = useStore();

  useEffect(() => {
    // 订阅store发布的状态, 当有更新的时候, 执行 forceUpdate
    const unsubscribe = store.subscribe(() => {
      console.log("store发布", store)
      forceUpdate()
    });
    // 清理的时候取消订阅
    return () => unsubscribe();
  }, []);

  const handleAddNotUpdate = () => {
    store.addAge();
  };
  const handleAddUpdate = () => {
    store.addAge();
    store.updateApp();
  };

  return (
    <div>
      <div>tick = {tick}</div>
      <div>age = {store.age}</div>
      <button onClick={handleAddNotUpdate}>年龄增加 -- 不更新界面</button>
      <button onClick={handleAddUpdate}>年龄增加 -- 更新界面</button>
    </div>
  );
};

const mydiv = (
  <div>
    <App />
  </div>
);

const appElement = document.querySelector("#root");
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
