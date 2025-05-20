import ReactDOM from 'react-dom/client';
import React from "react";
import {useForm} from "react-hook-form";

/*
官网：
https://react-hook-form.com/

Github：
https://github.com/react-hook-form
https://github.com/react-hook-form/react-hook-form

中文文档：
http://reacthookform.caitouyun.com/zh/

*/


function App() {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // 通过传递输入字段的名称来监视输入值

  return (
    /* 在调用 "onSubmit" 之前，"handleSubmit" 将验证你的输入  */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 通过调用 "register" 函数将输入注册到钩子中 */}
      <input defaultValue="test" {...register("example")} /> <br/>

      {/* 使用 required 或其他标准 HTML 验证规则进行验证 */}
      <input {...register("exampleRequired", {required: true})} />
      {/* 当字段验证失败时，会返回错误信息  */}
      {errors.exampleRequired && <span style={{color: 'red'}}>这是必填的</span>} <br/>

      <input type="submit"/>
    </form>
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
