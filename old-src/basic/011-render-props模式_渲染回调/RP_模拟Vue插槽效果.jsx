import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from "react";
import ReactDOM from "react-dom/client";

const App = props => {
  return <div>
    <div style={{ border: "1px solid red" }}>{props.children("head")}</div>
    <div>中间!!!!!</div>
    <div style={{ border: "1px solid green" }}>{props.children("footer")}</div>
  </div>;
};

const page = (
  <div>
    <App>
      {name => {
        if (name === "head") {
          return <div>头部啦啦啦</div>
        } else if (name === "footer") {
          return <div>底部哈哈哈</div>
        }
      }}
    </App>
  </div>
);

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);
