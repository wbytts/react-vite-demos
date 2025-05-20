import React, { Component } from 'react'
import store from '../../redux/store';

export default class Count extends Component {

  // 组件挂载完成的时候
  componentDidMount() {
    // 监测redux中状态的变化，只要有变化，就会调用render
    store.subscribe(() => {
      // 获取当前状态使用 store.getState()
      console.log('redux的状态发生改变', store.getState());
      this.forceUpdate(); // 或者用 this.setState({})
    });
  }

  increment = () => {
    console.log('增加');
    store.dispatch({type: 'increment', data: 3});
    // this.forceUpdate(); // 强制更新
  }

  decrement = () => {
    console.log('减少');
    store.dispatch({type: 'decrement', data: 3});
    // this.forceUpdate(); // 强制更新
  }

  render() {
    return (
      <div>
        <div>当前求和为: {store.getState()}</div>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
      </div>
    )
  }
}
