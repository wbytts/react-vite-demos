import React from "react";
import ReactDOM from "react-dom/client";

// https://github.com/veactjs/veact
import { useReactive } from "veact"

/*
import {
  // Veact APIs

  // lifecycle
  onMounted,
  onBeforeUnmount,
  onUpdated,

  // data
  useRef,
  useShallowRef,
  useReactive,
  useShallowReactive,
  useComputed,

  // watch
  watch,
  useWatch,
  watchEffect,
  useWatchEffect,

  // enhancer
  useReactivity, // any object data to reactivity data
  batchedUpdates, // batchedUpdates === ReactDOM.unstable_batchedUpdates

  // @vue/reactivity APIs
  ref,
  reactive,
  computed,
  // ...
} from 'veact'
*/

const Demo = props => {

  const obj = useReactive({
    x: 1,
    y: 2
  })

  return (
    <div>
      <button onClick={() => obj.x++}>x++</button>
      <button onClick={() => obj.y++}>y++</button>
      <div>{obj.x}</div>
      <div>{obj.y}</div>
    </div>
  );
};

const App = () => <div>
  <Demo/>
</div>;

const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(<App/>);
