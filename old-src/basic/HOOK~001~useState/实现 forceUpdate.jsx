import React, { useState, useEffect } from "react";
import ReactDOM, { flushSync } from "react-dom/client";

function useForceUpdate() {
  const [_tick, setTick] = useState(0);
  const forceUpdate = () => setTick(tick => tick + 1)
  return forceUpdate
}

const Count = props => {
  const forceUpdate = useForceUpdate()
  console.log("Count --> ###", Date.now())
  return (
    <div>
      <button onClick={flushSync}>HELLO</button>
    </div>
  );
};

const app = (
  <div>
    <Count/>
  </div>
);

const containerDOM = document.querySelector("#root");
const root = ReactDOM.createRoot(containerDOM);
root.render(app);
