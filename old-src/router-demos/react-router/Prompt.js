/*
在React Router中，<Prompt>组件用于阻止用户离开当前页面或导航到另一个页面。
它的作用类似于浏览器的"确认离开"对话框，用于提示用户在他们离开页面之前进行确认或执行某些操作。

当页面上有<Prompt>组件时，当用户尝试导航到其他页面时，React Router会检查是否具有未决的表单提交或未保存的更改等操作。
如果条件满足，则会显示一个提示框，询问用户是否确定离开当前页面。

可以使用<Prompt>的属性来自定义提示消息和操作逻辑。
例如，您可以设置message属性以自定义提示消息内容，当用户尝试离开页面时显示特定的提示信息。
您还可以使用当用户点击“确认”的回调函数来执行特定的操作。

需要注意的是，<Prompt>组件只能在Router组件内部使用，并且只能在用户导航时出现在要阻止的页面上。
*/

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
import ReactDOM from "react-dom/client"

const App = () => {

  // 表示更改是否未提交
  const [isFormDirty, setIsFormDirty] = useState(false);

  const handleInputChange = () => {
    setIsFormDirty(true);
  };

  const handleFormSubmit = () => {
    // 处理表单提交逻辑
    setIsFormDirty(false);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
        </ul>
      </nav>


      {/* 如果更改未提交，则提示 */}
      <Prompt
        when={isFormDirty}
        message="您有未保存的更改。确定要离开此页面吗？"
      />

      <Route path="/" exact>
        <form>
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="在这里输入内容"
          />
          <button onClick={handleFormSubmit}>保存</button>
        </form>
      </Route>

      <Route path="/about">
        <h2>关于页面</h2>
      </Route>
    </Router>
  );
};

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(<App />);
