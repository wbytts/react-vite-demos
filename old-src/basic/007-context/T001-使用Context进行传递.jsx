import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";

const FormContext = React.createContext({
  name: "",
  age: ""
});

const Demo = () => {
  const [form, setForm] = useState({ name: "", age: "" })
  return (
    <FormContext.Provider value={form}>
      <div>
        姓名：<input type="text" value={form.name} onInput={e => setForm({ ...form, name: e.target.value })}/> <br/>
        年龄：<input type="text" value={form.age} onInput={e => setForm({ ...form, age: e.target.value })}/>
        <hr/>
        <FormInfo/>
      </div>
    </FormContext.Provider>
  );
};

const FormInfo = () => {
  return (
    <div>
      <MyForm/>
    </div>
  )
}

const MyForm = () => {
  return (
    <FormContext.Consumer>
      {
        form => (
          <div>
            姓名：{form.name} <br/>
            年龄：{form.age}
          </div>
        )
      }
    </FormContext.Consumer>
  )
}

const App = () => <div>
  <Demo/>
</div>;

const mydiv = <App/>

//ReactDOM.render(<App />, document.querySelector('#app'));

// React18 改变后的写法
const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
