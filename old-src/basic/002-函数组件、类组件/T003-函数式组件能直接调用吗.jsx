import React from "react";
import ReactDOM from "react-dom/client";

/*
模块与组件：
    模块：
        向外提供特定功能的js程序，一般是一个js文件
        为什么要拆分模块，因为随着业务逻辑的增加，代码越来越多，越来越复杂
        作用：复用js，简化js编写，提高js运行效率
        模块化：当应用的js都是以模块来编写的，这个应用就是一个模块化应用
    组件：
        用来实现局部功能效果的代码和资源的集合
        为什么？一个界面的功能复杂，但是一个小部分的功能简单
        作用：复用代码，简化项目编码，提高运行效率
        组件化：当应用是以多个组件的方式实现的，这个应用就是一个组件化的应用
*/

// 函数式组件，组件名(函数名)称需要首字母大写
function Hello() {
  // 这里在被babel转换之后，开启了严格模式，所以this是undefined，而不是window
  console.log(this); // undefined
  return <div>你好</div>;
}

const mydiv = (
  <div>
    <Hello/>
    {/* 直接调用函数组件的函数 */}
    {Hello()}
  </div>
);

/*
  React会解析组件标签
  发现组件时函数定义的，随后调用该函数
  将返回的虚拟DOM转换成真实DOM，随后呈现在页面中
*/

const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);

/*
docker run \
-e MYSQL_ROOT_PASSWORD=123456 \
-v /root/docker_volumes/mysql/conf:/etc/mysql/conf.d \
-v /root/docker_volumes/mysql/logs:/logs \
-v /root/docker_volumes/mysql/data:/var/lib/mysql \
-p 9999:3306 \
mysql:8
*/
