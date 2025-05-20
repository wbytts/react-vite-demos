import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import store from './redux/store';

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(<App/>);

// 监测redux的变化，更新App组件
store.subscribe(() => {
  root.render(<App />, document.getElementById('root'));
});
