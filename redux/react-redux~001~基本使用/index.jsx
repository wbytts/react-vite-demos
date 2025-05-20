import React from "react";
import ReactDOM from "react-dom/client.js";
import App from "./App.jsx";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// 监测redux的变化，更新App组件
store.subscribe(() => {
  root.render(<App />);
});
