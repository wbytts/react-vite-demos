import React, { StrictMode } from "react";
//import ReactDOM from 'react-dom';
// React18之后的写法
import ReactDOM from "react-dom/client";

const Demo = props => {
  console.log("渲染了一次");
  return (
    <div>
      <div>123</div>
    </div>
  );
};

const App = () => (
  <div>
    <Demo />
  </div>
);

const mydiv = (
  // StrictMode 包裹起来的组件
  // 在开发环境中，该组件会刻意重复渲染其内嵌内容，以帮助我们发现那些不纯粹的组件
  // 而在生产环境中，这个组件没有任何副作用
  <StrictMode>
    <App />
  </StrictMode>
);

//ReactDOM.render(<App />, document.querySelector('#app'));

// React18 改变后的写法
const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
