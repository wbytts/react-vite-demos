import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import store from './redux/store';



ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// 监测redux的变化，更新组件
/*
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
*/
