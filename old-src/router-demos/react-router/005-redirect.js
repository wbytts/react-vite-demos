import React, {useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext, createContext} from "react";
import ReactDOM from "react-dom/client";
import {HashRouter, BrowserRouter, NavLink, Switch, Route, Redirect} from "react-router-dom";
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
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>

          {/* 重定向 */}
          <Redirect from="/ABOUT" to="/about"/>
          <Redirect from="/ABOUT2" to={{pathname: "/home", search: "?id=123"}}/>
          <Redirect from="/ABOUT3" to="/about"/>
          {/*
              push
              exact：严格匹配to
              strict：严格匹配from
              ensitive
          */}
          <Redirect to="/home"/>
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














