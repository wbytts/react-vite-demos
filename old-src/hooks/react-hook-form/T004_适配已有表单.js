import ReactDOM from 'react-dom/client';
import React from "react";
import {useForm} from "react-hook-form";

/*
处理已有表单很简单。关键步骤是将register应用到已有组件的ref中。
*/


// The following component is an example of your existing Input Component
const Input = ({label, register, required}) => (
  <div>
    <label>{label}</label>
    <input {...register(label, {required})} />
  </div>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({onChange, onBlur, name, label}, ref) => (
  <div>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </div>
));

const App = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required/>
      <Select label="Age" {...register("Age")} />
      <input type="submit"/>
    </form>
  );
};


const page = (
  <div>
    <App/>
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(page);

