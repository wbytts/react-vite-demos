// 条件渲染的不同写法
import React from "react";
import ReactDOM from "react-dom/client";
import cn from 'classnames'

const App = () => {
  let flag = false;
  let result = null;

  if (flag) {
    result = <h1>xxx</h1>;
  } else {
    result = <h1>yyyy</h1>;
  }

  return (
    <div>
      {flag ? <h1>aaaa</h1> : <h1>bbbbb</h1>}
      {flag && <h1>aaaa</h1>}
      {flag || <h1>bbbb</h1>}

    </div>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
