

export default class EventHandler {
  constructor(target) {
    this.target = target
  }

  handleClick = () => {
    console.log("按钮被点击了", this.target)
  }
}
