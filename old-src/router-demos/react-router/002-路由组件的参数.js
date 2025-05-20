import React, { useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext, createContext } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, NavLink, Switch, Route } from "react-router-dom";

/*
路由组件，会额外接收一些参数
  history: 控制跳转与监听
      length: 长度
      action: 行为
      block:
      createHref:
      push:
      replace:
      go:
      goBack:
      goForward:
      listen:
      location: 这个就是下面的那个location
  location: 地址信息
      pathname:
      search:
      hash:
      state:
      key:
  match: 匹配信息
      isExact:
      url:
      path:
      params:
  staticContext:
*/
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
        <NavLink to="/home">Home</NavLink>&nbsp;
        <NavLink to="/about">About</NavLink>
        <hr/>

        {/* 加上Switch之后，内部只会匹配一个Route，匹配成功后不会继续往下匹配 */}
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
