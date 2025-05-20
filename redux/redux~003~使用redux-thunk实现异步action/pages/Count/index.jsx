import React, { Component } from 'react'
import store from '../../redux/store';
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count-action';

export default class Count extends Component {

  componentDidMount() {
    // 监测redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
      console.log('redux的状态发生改变');
      this.forceUpdate(); // 或者用 this.setState({})
    });
  }

  increment = () => {
    console.log('增加');
    // store.dispatch({type: 'increment', data: 3});
    store.dispatch(createIncrementAction(3));
    // this.forceUpdate(); // 强制更新
  }

  decrement = () => {
    console.log('减少');
    // store.dispatch({type: 'decrement', data: 3});
    store.dispatch(createDecrementAction(3));
    // this.forceUpdate(); // 强制更新
  }

  incrementAsync = () => {
    console.log('异步增加');

    // 使用了 redux-thunk 之后, 可以给 store.dispatch 传递一个函数
    // 函数的第一个参数就是 dispatch, 可以在函数内部决定何时调用

    // store.dispatch(P => {
    //   setTimeout(() => P({type: 'increment', data: 100}), 10000)
    // })

    // 用createAction形式的函数来创建, 更加清晰
    store.dispatch(createIncrementAsyncAction(1, 2000));
  }

  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <button onClick={this.incrementAsync}>异步增加</button>
      </div>
    )
  }
}
