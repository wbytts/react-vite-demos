import ReactDOM from 'react-dom/client';
import React from "react";
import {useForm} from "react-hook-form";

/*
React Hook Form 结合了HTML标准表单校验，使表单校验变得简单。

表单数据校验：
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

支持的校验规则列表:
    required      必填
    min           最小值
    max           最大值
    minLength     最小长度
    maxLength     最大长度
    pattern       正则表达式
    validate      自定义校验函数

*/

function App() {
  const {
    register,
    handleSubmit, // 调用 handleSubmit 的时候，可以得到当前的参数
  } = useForm();

  const handleClick = (data) => {
    console.log("点击了按钮: ", data)
  }

  const onSubmit = data => console.log(data);

  return (
    <div>
      <button onClick={handleSubmit(handleClick)}>按钮</button>
      <hr/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", {required: true, maxLength: 20})} />
        <input {...register("lastName", {pattern: /^[A-Za-z]+$/i})} />
        <input type="number" {...register("age", {min: 18, max: 99})} />
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

