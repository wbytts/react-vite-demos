import React from 'react';
import ReactDOM from 'react-dom';

/*
    setState
        1. 传递一个对象
        2. 传递一个回调函数 (state, props) => newState
        3. 传递两个函数
            a. 第一个  (state, props) => newState
            b. 第二个 状态更新后(页面完成重新渲染), 立即执行的函数
*/

class SetState extends React.Component {
  constructor() {
    super(); // 关于 this 的操作需要放在 super 的后面，其他的可以放在前面的
    this.state = {
      msg: 'Hello',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    );
  }

  handleClick = () => {
    // state 中的数据，不能直接进行更改，必须使用 setState 方法来修改
    this.setState((state, props) => ({
      msg: state.msg + props.t,
    }));
  };
}

const mydiv = (
  <div>
    <SetState t="啦" />
  </div>
);

const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
