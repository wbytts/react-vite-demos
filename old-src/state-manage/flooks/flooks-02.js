﻿import React from 'react';
import ReactDOM from 'react-dom';
import useCounter from './flooks/counter';

function Counter() {
  const { count, add, addAsync } = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={addAsync}>+~ {addAsync.loading && '...'}</button>
    </div>
  );
}

function Counter2() {
  const { count, add, addAsync, x } = useCounter(); // 可以发现，多次调用这个hook，使用的是同一个状态

  return (
    <div>
      <p>
        {count} --- {x}
      </p>
      <button onClick={add}>+</button>
      <button onClick={addAsync}>+~ {addAsync.loading && '...'}</button>
    </div>
  );
}

const mydiv = (
  <div>
    <Counter />
    <Counter2 />
  </div>
);

const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
