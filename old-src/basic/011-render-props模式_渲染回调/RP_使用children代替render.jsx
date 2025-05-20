import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types"

class Mouse extends React.Component {

  // 检查 children 为一个函数
  static propTypes = {
    children: PropTypes.func.isRequired
  }

  state = {
    // 鼠标状态
    x: 0,
    y: 0,
  }

  // 鼠标移动
  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  // 监听鼠标移动事件
  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove)
  }

  // 取消鼠标移动事件的监听
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove)
  }

  render() {
    return this.props.children(this.state)
  }
}


const App = props => {
  return <div>
    <Mouse>
      {({ x, y }) => <div>
        <h1>x: {x}</h1>
        <h1>y: {y}</h1>
      </div>}
    </Mouse>
  </div>;
};


const page = (<div>
  <App/>
</div>);

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);

