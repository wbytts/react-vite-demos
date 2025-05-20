import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import {create} from "zustand";

const useStore = create(set => ({
  x: 0,
  addX: () => set(state => ({x: state.x + 1})),
  resetX: () => set({x: 0})
}));

function A() {
  const store = useStore()
  return <h1>store.x = {store.x}</h1>;
}

function B() {
  const store = useStore()
  return <button onClick={store.addX}>Add X</button>;
}

const App = props => {
  return (
    <div>
      <A/>
      <hr/>
      <B/>
    </div>
  );
};

const page = (
  <div>
    <App/>
  </div>
);

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);
