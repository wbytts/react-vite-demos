import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"

import { Button } from "tdesign-react"
import "tdesign-react/es/style/index.css" // 少量公共样式
// import 'tdesign-react/dist/tdesign.css'; // 全局引入所有组件样式代码

const App = props => {
  return <div>
    <Button>按钮呀</Button>
  </div>
}


const page = (
  <div>
    <App />
  </div>
)

const containerDOM = document.querySelector("#app")
const root = ReactDOM.createRoot(containerDOM)
root.render(page)

