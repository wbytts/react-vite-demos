import React, { Component } from "react"
import EventHandler from './EventHandler'

export default class MyCom extends Component {
  constructor() {
    super()
    this.handler = new EventHandler(this)
  }


  render() {
    return <div>
      <button onClick={this.handler.handleClick}>按钮</button>
    </div>
  }
}
