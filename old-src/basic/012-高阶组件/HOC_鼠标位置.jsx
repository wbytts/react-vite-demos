import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

/*
高阶组件通过一个函数生成，这个函数接收一个组件，并且返回一个新的组件

总结高阶组件的基本使用步骤：
    1. 创建一个函数, 一般约定以 with 开头
    2. 指定函数参数, 作为要渲染的组件(一般是大写字母开头)
    3. 在函数内部创建一个类组件, 提供复用状态的逻辑代码, 并返回类组件
    4. 在类组件中, 渲染参数提供的组件, 同时将类组件状态通过 props 传递给参数组件
    5. 调用该高阶组件, 传入要增强的组件, 通过返回值拿到增强后的组件
    6. 设置 displayName, 便于在调试时区分不同的组件
*/

// 高阶组件，获取鼠标位置
// 高阶组件，约定以 with 开头
function withMousePosition(WrappedComponent) {
  return class extends React.Component {

    static displayName = `WithMousePosition(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`

    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0
      };
    }

    componentDidMount() {
      document.addEventListener("mousemove", this.handleMouseMove);
    }

    componentWillUnmount() {
      document.removeEventListener("mousemove", this.handleMouseMove);
    }

    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }

    render() {
      return <WrappedComponent {...this.props} mousePosition={this.state}/>;
    }
  }
}

function MyCom(props) {
  return <div>
    <h1>x: {props.mousePosition.x}</h1>
    <h1>y: {props.mousePosition.y}</h1>
  </div>
}

const MyComWithPosition = withMousePosition(MyCom)

const App = props => {
  return <div>
    <MyComWithPosition />
  </div>;
};


const page = (
  <div>
    <App/>
  </div>
);

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);

