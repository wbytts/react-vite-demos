import React, { Component } from 'react'
// import store from '../../redux/store';
// import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count-action';

export default class Count extends Component {

  componentDidMount() {
    // 监测redux中状态的变化，只要变化，就调用render
    // store.subscribe(() => {
    //   console.log('redux的状态发生改变');
    //   this.forceUpdate(); // 或者用 this.setState({})
    // });
  }

  increment = () => {
    console.log('增加');
    // store.dispatch({type: 'increment', data: 3});
    // store.dispatch(createIncrementAction(3));
    // this.forceUpdate(); // 强制更新
    this.props.increment(1);
  }

  decrement = () => {
    console.log('减少');
    // store.dispatch({type: 'decrement', data: 3});
    // store.dispatch(createDecrementAction(3));
    // this.forceUpdate(); // 强制更新
    this.props.decrement(1);
  }

  incrementAsync = () => {
    console.log('异步增加');
    // store.dispatch(createIncrementAsyncAction(1, 2000));
    this.props.incrementAsync(1, 2000)
  }

  render() {
    console.log('CountUI-Props', this.props)
    return (
      <div>
        <h3>当前求和为: {this.props.count}</h3>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <button onClick={this.incrementAsync}>异步增加</button>
      </div>
    )
  }
}
