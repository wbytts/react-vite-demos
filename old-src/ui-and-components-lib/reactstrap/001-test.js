import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <div></div>;
}

const mydiv = (
  <div>
    <App />
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(mydiv);
