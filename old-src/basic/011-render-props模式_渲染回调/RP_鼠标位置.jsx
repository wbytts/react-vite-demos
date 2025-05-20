import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove)
  }

  render() {
    return this.props.render(this.state)
  }
}


const App = props => {
  return <div>
    {/* render-props 模式 */}
    <Mouse render={mouse => {
      return <div>
        <h1>x: {mouse.x}</h1>
        <h1>y: {mouse.y}</h1>
      </div>
    }}/>
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

