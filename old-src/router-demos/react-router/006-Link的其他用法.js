import React, { useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext, createContext } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import qs from "querystring";

const Home = props => {
  console.log(props);

  // 如果有search参数
  if (props.location.search) {
  }

  return (
    <div>
      <div>首页</div>
      <div>{JSON.stringify(props)}</div>
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

const FancyLink = React.forwardRef(({ navigate, ...props }, ref) => {
  const handleClick = () => {
  };
  return (
    <a ref={ref} {...props} onClick={handleClick}>
      💅 {props.children}
    </a>
  );
});

const App = props => {
  return (
    <div>
      <HashRouter>
        <Link to="/home">Home</Link>&nbsp;
        <Link to="/about">About</Link>&nbsp;
        {/* 对象形式的 to */}
        <Link to={{ pathname: "/home", search: "?id=123" }}>Home-Object</Link>&nbsp;
        {/* 函数形式的 to */}
        <Link to={location => ({ ...location, pathname: "/home" })}>Home-To-Func</Link>&nbsp;
        {/* 传递params参数 */}
        <Link to="/home/1/2/3">Home-params</Link>&nbsp;
        {/* 传递search参数 */}
        <Link to="/home?id=123">Home-search</Link>&nbsp;
        {/* 传递state参数 */}
        {/* state参数不会在地址栏显示 */}
        {/*
            关于state参数页面刷新时的丢失问题：
                HashRouter：state参数会丢失
                BrowserRouter：state参数不会丢失
        */}
        <Link to={{ pathname: "/home", state: { id: 123, name: "zs" } }}>Home-State</Link>&nbsp;
        {/*
          路由跳转的模式：
              push：默认路由跳转使用的是push模式
              replace：
        */}
        <Link replace to="/home">
          Home-Replace
        </Link>
        &nbsp;
        {/* others里面配置的属性，会提供给实际的a标签， 如 title、id、className 等 */}
        <Link to="/home" others={{ title: "啦啦啦" }}>
          Home-others
        </Link>
        {/* 自定义Link组件 */}
        <Link to="/about" component={FancyLink}>
          FancyLink
        </Link>
        <hr/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/home/:a/:b/:c" component={Home}/>
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
