import React from "react";
import ReactDOM from "react-dom";

class Demo extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  death = () => {
    // 卸载组件
    ReactDOM.unmountComponentAtNode(document.getElementById("app"));
  };

  force = () => {
    this.forceUpdate();
  };

  /*
      初始化阶段： 由 ReactDOM.render 触发，初次渲染
          constructor
          componentWillMount
          render
          componentDidMount：一般在这里做一些初始化的事情，如：开启定时器，发送网络请求等

      更新阶段：由 setState 触发
          shouldComponentUpdate
          componentWillUpdate （如果是 forceUpdate 触发的更新，则从这里开始）
          render
          componentDidUpdate

      父组件【重新】render 触发
          componentWillReceiveProps
          shouldComponentUpdate
          conponentWillUpdate
          render
          componentDidUpdate

      卸载组件：由 ReactDOM.unmountComponentAtNode() 触发
          componentWillUnmount：一般在这里做一些善后工作

  */

  /*
    构造方法，组件创建时被调用
    接收一个 props，在内部最好调用 super(props) 初始化父组件
  */
  constructor(props) {
    super(props);
    console.log("constructor, 组件构造器", props);
  }

  /*
    组件即将挂载
  */
  UNSAFE_componentWillMount() {
    console.log("componentWillMount, 组件将要挂载");
  }

  /*
    组件挂载完成
  */
  componentDidMount() {
    console.log("componentDidMount, 组件挂载完成");
  }

  // 父组件 render 时，子组件会执行这个钩子（第一次不算！）
  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillReceiveProps")
  }

  shouldComponentUpdate() {
    // 默认提供为空，返回 true
    console.log("shouldComponentUpdate, 组件是否应该更新");
    return true;
  }

  // 组件即将更新
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate, 组件将要更新");
  }

  // 组件更新完成
  componentDidUpdate(preProps) {
    console.log("componentDidUpdate, 组件更新完成");

    // 在这里调用 setState 可能会导致递归更新
    // 可以通过判断 新旧 props 是否一致来决定是否更新 state
    if(preProps.xxx !== this.props.xxx) {
      this.setState({})
    }
  }

  // 组件即将卸载
  componentWillUnmount() {
    console.log("componentWillUnmount, 组件将要卸载");
  }

  // 组件渲染
  // 组件更新的情况 1. props改变   2. setState   3. forceUpdate
  // 每次组件渲染都会执行 render
  //! 不要在 render 中再次调用 setState，会导致无限递归更新状态和视图
  render() {
    console.log("render, 组件渲染");
    return (
      <div>
        NOW: {this.state.count}
        <br />
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>强制更新组件</button>
      </div>
    );
  }
}

const mydiv = (
  <div>
    <Demo x={1} />
  </div>
);

const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
