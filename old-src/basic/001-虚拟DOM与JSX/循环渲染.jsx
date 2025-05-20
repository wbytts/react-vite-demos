import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const MyButton = () => {
  const [x, setX] = useState(0)

  const handleClick = () => {
    setX(x => x + 1)
    setX(x => x + 1)
    setX(x => x + 1)
  }

  return <div>
    <h1 onClick={handleClick}>{x}</h1>
  </div>
}

const App = () => {
  return <div>
    <MyButton />
  </div>;
};


const page = (
  <div>
    <App/>
  </div>
);

const containerDOM = document.querySelector("#root");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);

