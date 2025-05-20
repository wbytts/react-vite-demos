import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux"
import { store } from "./store/index.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*
            react-redux 的 Provider 组件, 提供 store内容给内部组件
      */}
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
