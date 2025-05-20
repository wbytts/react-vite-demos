import React, { useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext, createContext } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import "./style.css";

const Home = props => {
  console.log(props);
  return (
    <div>
      <div>首页</div>
    </div>
  );
};

const About = props => {
  return (
    <div>
      <div>关于</div>
    </div>
  );
};

const App = props => {
  return (
    <div>
      <HashRouter>
        <NavLink to="/home" activeClassName="asd">
          Home
        </NavLink>
        &nbsp;
        <NavLink to="/about" activeClassName="asd">
          About
        </NavLink>
        <hr/>
        <Switch>
          {/* React Router 默认是模糊匹配 */}
          {/* 如果是多级路径，会先将路由路径按 / 分割，然后挨个匹配，如果第一个匹配到了，就去显示，然后在组件里再匹配剩下的 */}
          {/* 如果设置了 exact，则为精确匹配, 必须完全一样才会进行显示 */}
          <Route exact path="/home" component={Home}/>
          <Route exact path="/home/1" component={Home}/>
          <Route exact path="/home/1/2" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </HashRouter>
    </div>
  );
};

const page = (
  <div>
    <App/>
  </div>
);

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);
