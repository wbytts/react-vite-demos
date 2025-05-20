import React from 'react';
import ReactDOM from 'react-dom/client';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <input ref="input1" type="text" placeholder="点击按钮提示数据" />
        <button onClick={this.handleClick}>点击提示左侧数据</button>
        <input ref="input2" type="text" placeholder="失去焦点提示数据" />
      </div>
    );
  }
  handleClick = () => {
    console.log('提示数据~~~', this.refs.input2.value);
    // 可以看到 refs 已经不推荐使用了
    this.refs.input1.value = 'Hello';
  };
}

const mydiv = (
  <div>
    <Demo />
  </div>
);

const appElement = document.querySelector('#root');
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
