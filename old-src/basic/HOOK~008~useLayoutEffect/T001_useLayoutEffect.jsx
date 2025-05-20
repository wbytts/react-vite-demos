import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

/*
useLayoutEffect 是 useEffect 的一个版本，在浏览器重新绘制屏幕之前触发

*/

const App = () => {
  return <div></div>;
};


const page = (
  <>
    <App/>
  </>
);

const containerDOM = document.querySelector("#root");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);

