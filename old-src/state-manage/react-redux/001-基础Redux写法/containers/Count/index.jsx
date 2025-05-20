// 引入Count的UI组件
import CountUI from "../../components/Count"
// 引入redux
// import store from '../../redux/store'
// 引入 connect 用于连接UI组件与redux
import { connect } from "react-redux"
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count-action";


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
