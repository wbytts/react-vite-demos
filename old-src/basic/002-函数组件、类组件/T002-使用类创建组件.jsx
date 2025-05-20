import React from 'react';
import ReactDOM from "react-dom/client";

// 使用 class 方式实现组件，需要继承 React.Component
class Hello extends React.Component {
  // 构造器，可以接收到组件的属性对象 props
  constructor(props) {
    // 初始化，如果构造器里有其他操作，需要先进行这一步
    super(props);

    // 可以在构造器里初始化 state对象（state也可以直接在外面写成类属性）
    this.state = {
      msg: 'Hello World',
    };
  }
  // 内部必须至少实现 render 方法
  // render 渲染当前组件对应的虚拟DOM元素
  render() {
    // this 表示当前组件的实例对象
    // 访问传入的属性，直接通过 this.props.xxx 进行访问
    return (
      <h1>
        你好啊: {this.props.name} -- {this.props.age} <br />
        {this.state.msg}
      </h1>
    );
  }
}

/*
    class 与 function 方式创建组件的区别：
        class创建的组件，有自己的的私有数据
        function创建的组件，只有 props，没有私有数据和生命周期函数

    function创建的也叫无状态组件（react hook除外）
    class创建的组件也叫有状态组件

    无状态组件因为没有自己的state和生命周期函数，所以运行效率会比有状态组件稍微高一些

    不过后来出现了 HOOK
*/

const mydiv = (
  <div>
    <Hello name="zhagnsan" age={18} />

    {/* 也可以手动直接调用 */}
    {new Hello({name: '张三', age: 18}).render()}
  </div>
);

const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
