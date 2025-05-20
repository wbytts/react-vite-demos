import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Link, Route, BrowserRouter, useRouteMatch, useParams } from 'react-router-dom';

const Home = props => {
  return <div>首页</div>;
};

const About = props => {
  const params = useParams()
  console.log("params", params)
  return <div>关于</div>;
};

const App = props => {
  return (
    <div>
      <HashRouter>
        <Link to="/home">Home</Link>&nbsp;
        <Link to="/about">About</Link>
        <hr />
        <Route path="/home" component={Home} />
        <Route path="/about/:id" component={About} />
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
