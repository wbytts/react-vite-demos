import ReactDOM from 'react-dom/client';
import React from "react";
import {useForm} from "react-hook-form";

/*
    React Hook Form的一个关键概念是将非受控组件注册到Hook中，从而在表单校验和提交时可以获取到它的值。
    注意：每个表单项都需要【唯一的 name】 作为注册的键
    注意：React Native 将需要使用手动注册 (例子如下: register('test', { required: true })或使用Controller来包装并注册你的组件。
*/

function App() {
  const {
    register,
    handleSubmit, // 调用 handleSubmit 的时候，可以得到当前的参数
  } = useForm();

  const handleClick = (data) => {
    console.log("点击了按钮", data)
  }

  const onSubmit = data => console.log(data);

  return (
    <div>
      <button onClick={handleSubmit(handleClick)}>按钮</button>
      <hr/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit"/>
      </form>
    </div>
  );
}

const page = (
  <div>
    <App/>
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(page);

