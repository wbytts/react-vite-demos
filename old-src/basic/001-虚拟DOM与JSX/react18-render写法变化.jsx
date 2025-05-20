import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <div>Hello</div>;
}

const mydiv = (
  <div>
    <App />
  </div>
);

const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
