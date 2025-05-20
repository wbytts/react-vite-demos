import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useReducer,
  useMemo,
  useRef,
  useContext,
  useLayoutEffect,
  useTransition,
  useId,
  useInsertionEffect,
  useSyncExternalStore,
} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Link, Route, useParams } from "react-router-dom"

const Home = props => {
  const p = useParams();
  return <div>首页</div>;
};

const About = props => {
  return <div>关于</div>;
};

const App = props => {
  return <div>
    <HashRouter>
      <Link to="/home">Home</Link>&nbsp;
      <Link to="/about">About</Link>
      <hr />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  </div>;
};


const page = (
  <div>
    <App />
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(page);

