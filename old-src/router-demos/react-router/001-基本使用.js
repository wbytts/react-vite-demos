/*
    安装： npm install react-router-dom@5
*/

import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Link, Route, BrowserRouter } from 'react-router-dom';

const Home = props => {
  return <div>首页</div>;
};

const About = props => {
  return <div>关于</div>;
};

const App = props => {
  return (
    <div>
      {/* 哈希路由器 */}
      {/*
          <Router>组件
              HashRouter
              BrowserRouter
              MemoryRouter
              NativeRouter
              StaticRouter
                  从不改变location，常用于服务端渲染
                  当用户实际上没有点击浏览时，位置实际上并没有改变。因此，被称为“静态”。
                  在简单的测试中，当你只需要插入一个位置并对渲染输出进行断言时，它也非常有用。
      */}
      {/*
          每个 Router 内部会进行 Route 的匹配
          满足条件的 Route 会展示其管理的组件
      */}



      <HashRouter>
        {/* 路由必须在路由器中写 */}
        <Link to="/home">Home</Link>&nbsp;
        <Link to="/about">About</Link>&nbsp;
        <Link to="/render">render</Link>&nbsp;
        <Link to="/children">children</Link>&nbsp;

        <hr />

        {/* 与当前路由匹配的Route，会用 component指定的组件来显示 */}
        {/* 这里的 component 也叫做路由组件 */}
        {/* 路由组件会接受一些额外的参数 */}
        {/* 直接写Route，所有符合条件的Route都会被匹配 */}
        <Route path="/home" component={Home} />

        {/* 不用component, 直接写在 Route 里面也行 (相当于 children 属性) */}
        <Route path="/about">
          <About />
        </Route>

        {/* 使用 render 可以直接写 */}
        <Route path="/render" render={() => <div>你好啊</div>} />

        {/* children属性 */}
        {/*
          有时候你需要根据路径是否匹配位置来渲染内容。
          在这种情况下，你可以使用函数 children 属性。它的工作方式与 render 方法完全相同，只是它在有匹配或无匹配时都会被调用。
          children 渲染属性接收与组件和render方法相同的所有路由属性，只是当路由无法匹配URL时，match 为null
          这使你能够根据路由是否匹配动态调整你的UI
        */}
        {/*
            即使 Route没被匹配到，children属性指定的内容也会被渲染
        */}
        <Route path="/children" children={({match}) => {
          return <div style={{color: match ? 'red' : '#000'}}>123</div>
        }} />

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
