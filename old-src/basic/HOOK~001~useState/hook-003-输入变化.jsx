import React, { useState, useCallback } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styled from 'styled-components';

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);
  const change = e => setValue(e.target.value);
  const clear = e => setValue('');
  return { value, change, clear };
}

const App = props => {
  const inputVal = useInputValue();

  return (
    <div>
      <input value={inputVal.value} onChange={inputVal.change} />
      <button onClick={inputVal.clear}>清空</button>
      <div>{inputVal.value}</div>
    </div>
  );
};

const mydiv = (
  <div>
    <App />
  </div>
);

// 把 虚拟DOM 渲染到页面上
const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
