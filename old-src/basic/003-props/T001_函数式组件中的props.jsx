import React from "react";
import ReactDOM from "react-dom/client";


function Hello(props) {
  // 自定义组件的属性，会被收集到一个对象中作为参数
  console.log(props);
  // 注意：props 的属性是只读的，不能修改
  return <div>你好 {props.name}</div>;
}

const p = {
  name: "张三",
  age: 18,
  gender: "男",
};

const mydiv = (
  <div>
    <Hello name="wby"/>
    {/* 展开对象属性的写法 */}
    <Hello {...p} />
  </div>
);


const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
