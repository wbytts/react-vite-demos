import React from "react";
import ReactDOM from "react-dom";

class Person extends React.Component {

  // 如果有 constructor 构造器，则也会接收到 props 参数
  // 注：如果写了构造器，则必须将 props 传给 super，否则无法在构造函数中获取到 props
  // 但是不影响其他位置的 this.props
  constructor(props) {
    // 在 super 之后才能使用 this
    super(props)
  }

  render() {
    return (
      <ul>
        <li> 姓名: {this.props.name} </li>
        <li> 性别: {this.props.sex} </li>
        <li> 年龄: {this.props.age} </li>
        {" "}
      </ul>
    );
  }
}

const mydiv = (
  <div>
    <Person name="zs" sex="男" age={18}/> <Person name="ls" sex="女" age={20}/>{" "}
  </div>
);

const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
