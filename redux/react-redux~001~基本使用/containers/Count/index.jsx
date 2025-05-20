// 引入Count的UI组件
import CountUI from "../../components/Count"
// 引入redux
// import store from '../../redux/store'
// 引入 connect 用于连接UI组件与redux
import { connect } from "react-redux"
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count-action";

/*
react-redux 做的事情就是把 state 和 dispatch 添加到组件的 props 上

const 新组件 = connect(
  mapStateToProps, 
  mapDispatchToProps, 
  mergeProps,
  options
)(目标组件)

一般
原始的组件叫做UI组件
connect 处理之后的组件叫做容器组件


*/

// state -> props
const mapStateToProps = state => {
  return {
    count: state
  }
}

// dispatch -> props
const mapDispatchToProps = dispatch => {
  return {
    increment: data => {
      console.log("container, increment...", data);
      dispatch(createIncrementAction(data))
    },
    decrement: data => {
      console.log("container, decrement...", data);
      dispatch(createDecrementAction(data))
    },
    incrementAsync: (data, time) => {
      dispatch(createIncrementAsyncAction(data, time))
    }
  }
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

export default CountContainer
