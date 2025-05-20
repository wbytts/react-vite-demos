import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

/*
    父组件重新渲染时, 也会重新渲染子组件
    但只会渲染当前组件子树(当前组件及其所有子组件)

*/

const App = props => {
  return <div></div>;
};


const page = (
  <div>
    <App/>
  </div>
);

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);

