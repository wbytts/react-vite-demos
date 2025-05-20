// 引入 React
import React from "react";
// 把创建好的组件放到页面中显示
//import ReactDOM from 'react-dom';
// React18之后的引入方式
import ReactDOM from "react-dom/client";

// 创建元素（节点）
// 参数1：创建元素的类型，字符串，元素名称
// 参数2：是一个对象或者null，表示当前这个DOM元素的属性
// 参数3：子节点
// 参数n：其他子节点
const myh1 = React.createElement("h1", { id: "head", title: "标题" }, "这是一个h1");

/*
    document.createElement    创建真实DOM --- 描述页面节点的对象
    React.createElement       创建虚拟DOM --- 描述DOM结构的对象，属性比真实DOM少，只关心类型与必要的属性
*/

// 再套一个div
const mydiv = React.createElement("div", { title: '啊对对对' }, "这是一个div元素", myh1);
/*
    虚拟DOM：这里的myh1和mydiv都是虚拟DOM
    用JS对象的形式，来表示DOM之间的嵌套关系、属性
*/

// 将虚拟DOM渲染到页面上

// React18之前的写法
// 参数1：虚拟DOM对象
// 参数2：页面上的DOM元素对象
//ReactDOM.render(mydiv, document.getElementById("app"))

// React18 改变后的写法
const rootDOM = document.querySelector("#root"); // 真实DOM
const root = ReactDOM.createRoot(rootDOM); // 创建渲染容器
root.render(mydiv); // 将 ReactElement 渲染到页面中
