import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const MyContext = React.createContext()

const App = props => {

  return <div>
    <MyContext.Consumer>
      {data => {
        return <div>
          <h1>姓名：{data.name}</h1>
          <h1>年龄：{data.age}</h1>
          <button >增加年龄</button>
        </div>
      }}
    </MyContext.Consumer>
  </div>;
};


const data = {
  name: "张三",
  age: 18
}
const page = (
  <div>
    <MyContext.Provider value={data}>
      <App/>
    </MyContext.Provider>
  </div>
);

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);

