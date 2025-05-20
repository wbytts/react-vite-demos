// 创建组件、虚拟DOM、生命周期
import React from "react";
// 把创建好的组件放到页面中显示
import ReactDOM from "react-dom/client";

// 使用 JSX 语法（需要使用 babel）
// JSX语法的本质：在运行的时候，被转换成了 React.createElement的形式来执行的
/*
    npm install -D @babel/preset-react
    npm install -D babel-core babel-loader@7 babel-plugin-transform-runtime
    npm install -D babel-preset-env babel-preset-stage-0

    创建 .babelrc 文件：
    配置：
          {
              "presets": ["env", "stage-0", "react"],
              "plugins": ["transform-runtime"]
          }

*/

const title = React.createElement("h1", null, "你好啊")
// 等价于
const titleJsx = <h1>你好啊</h1>

const demo = <div>
  <span>名称:</span>
  <span>wby</span>
</div>
// 等价于
const demo1 = React.createElement(
  "div",
  null,
  React.createElement("span", null, "名称:"),
  React.createElement("span", null, "wby")
)

console.log(title)
console.log(titleJsx)

const mydiv = (
  <div>
    <h1 id="head" title="标题">
      我是一个h1
    </h1>
    {title}
    {titleJsx}
    {demo}
    {demo1}
  </div>
);

/*
  更新 -> Element对象  -> 虚拟DOM     -> 真实DOM
  更新 -> Template模板 -> Parser解析  -> 虚拟DOM -> 真实DOM
*/

const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
