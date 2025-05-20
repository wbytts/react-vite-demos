import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Link, Route, BrowserRouter, useRouteMatch } from 'react-router-dom';

const Home = props => {
  const match = useRouteMatch()
  console.log(match)

  /*
    url       URL
    path      路径
    params    路由参数
    isExact   是否精准匹配
  */

  return <div>首页</div>;
};

const About = props => {
  return <div>关于</div>;
};

const App = props => {
  return (
    <div>
      {/* 哈希路由器 */}
      <HashRouter>
        {/* 路由必须在路由器中写 */}
        <Link to="/home">Home</Link>&nbsp;
        <Link to="/about">About</Link>
        <hr />
        {/* 与当前路由匹配的Route，会用 component指定的组件来显示 */}
        {/* 这里的 component 也叫做路由组件 */}
        {/* 路由组件会接受一些额外的参数 */}
        {/* 直接写Route，所有符合条件的Route都会被匹配 */}
        <Route path="/home" component={Home} />

        {/* 直接写在 Route 里面也行 */}
        <Route path="/about">
          <About />
        </Route>
      </HashRouter>
    </div>
  );
};

const page = (
  <div>
    <App />
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(page);
