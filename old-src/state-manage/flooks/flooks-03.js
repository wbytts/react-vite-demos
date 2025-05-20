﻿import React from 'react';
import ReactDOM from 'react-dom';
import use$counter from './flooks/counter';

function Counter() {
  const { count, add, addAsync } = use$counter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={addAsync}>+~ {addAsync.loading && '...'}</button>
    </div>
  );
}

function Counter2() {
  const { count, add, addAsync, x } = use$counter();

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
