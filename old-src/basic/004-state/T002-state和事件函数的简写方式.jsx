import React from 'react';
import ReactDOM from 'react-dom/client';

class SimpleState extends React.Component {
  // 初始化状态
  state = {
    msg: 'Hello',
  };

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    );
  }

  // ES7的属性初始化写法，实际上也是使用了箭头函数
  // 使用箭头函数简化事件函数，并且解决this的问题
  handleClick = () => {
    // 简写形式 setState(obj, [callback])
    // this.setState({msg: 'World'})
    // setState的另一种写法
    /*
          setState(updater, [callback])
            updater为返回stateChange对象的函数，可以接收到state和props
            updater可以接收到state和props
            callback是可选的回调函数，它在状态更新、界面也更新后才被调用
        */
       console.log("点击事件")
  };
}

const mydiv = (
  <div>
    <SimpleState />
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(mydiv);
