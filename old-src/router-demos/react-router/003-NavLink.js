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
      {/* 哈希路由器 */}
      <HashRouter>
        {/* 路由必须在路由器中写 */}
        {/*
          NavLink属性：
              activeClassName: 路由被激活时的类名
              activeStyle: 路由被激活时的样式
              isActive: 路由是否被激活
        */}
        <NavLink to="/home" activeClassName="asd">
          Home
        </NavLink>
        &nbsp;
        <NavLink to="/about" activeClassName="asd">
          About
        </NavLink>
        <hr/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
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
