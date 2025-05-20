
export class EventBus {
  event = {}

  /**
   * 绑定事件
   * @param eventName 事件名称
   * @param callback 事件回调函数
   */
  on(eventName, callback) {
    if(this.event[eventName]) {
      this.event[eventName].push(callback)
    } else {
      this.event[eventName] = [callback]
    }
  }

  /**
   * 触发事件
   * @param eventName 事件名称
   * @param params 事件参数
   */
  emit(eventName, ...params) {
    if(this.event[eventName]) {
      this.event.forEach(callback => {
        callback(...params)
      })
    }
  }

  /**
   * 解绑事件
   * @param eventName 事件名称
   * @param callback 事件回调（不传则移除所有事件）
   */
  off(eventName, callback) {
    if(this.event[eventName]) {
      if(callback) {
        let index = this.event[eventName].findIndex(f => f === callback);
        this.event[eventName].splice(index, 1)
      } else {
        delete this.event[eventName]
      }
    }
  }
}

