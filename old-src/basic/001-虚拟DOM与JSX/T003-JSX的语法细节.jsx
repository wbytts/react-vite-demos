// 创建组件、虚拟DOM、生命周期
import React from "react";
// 把创建好的组件放到页面中显示
import ReactDOM from "react-dom/client";

// 使用 JSX 语法（需要使用 babel）
// JSX语法的本质，在运行的时候，还是被转换成了 React.createElement的形式来执行的
/*
    npm install babel-core babel-loader@7 babel-plugin-transform-runtime -D
    npm install babel-preset-env babel-preset-stage-0 -D
*/

/*
    JSX: Javascript and XML
    JSX工具:
        在线转换器: https://transform.tools/html-to-jsx
    JSX 语法规则：
        1. 定义虚拟DOM时，不要写引号，标签本身就是一个虚拟DOM对象（或者叫React元素）
        2. 标签中混入JS表达式时要用 {} ， 注意大括号中是表达式，不是语句
            a. {} 中值为一个数组，会自动将数组遍历，并将其元素内容显示来
            b. JSX表达式本身也是一个表达式，所以JSX可以放到大括号中
            c. 放到大括号中的表达式的值不能是一个普通对象 （React元素除外）
            d. null 和 undefined 放在大括号中，会渲染为空
            e. 大括号不仅可以放在标签内容里，也能放在标签属性值上
            f. 在JSX内部注释可以使用 {} + 多行注释 的形式
        3. 因为关键字冲突改名的属性
            a. 样式的类名不要用 class，要改为 className
            b. label 标签中的 for 属性，需要改为 htmlFor
        4. style属性: 内联样式需要用对象的形式 {{...}}
            a. 第一个大括号是JSX表达式的标志
            b. 第二个大括号表示样式对象
        5. 一个JSX表达式只能有一个根标签
            a. 根标签可以是 -- 双标签
            b. 如果不想渲染根元素, 可以使用空标签 <> 和 </>
        6. 所有标签必须要闭合, 不能省略 /
        7. 标签首字母的识别
            a. 若小写字母开头，则将标签改为HTML中同名元素，若html中无该标签对应的同名元素，则报错
            b. 若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错
        8. 延展属性: 如果要给元素传一组值，可以使用 ... 加对象的方式
        9. textarea 中的内容，需要绑定 value 属性，HTML中则可以直接写在 textarea中间
        10. select 标签中，使用 value 标识当前选项，在HTML中，使用 option 中的 selected属性标识当前选项
 */

const a = 10;
const str = "你好，中国";
const flag = false;
let title = "999";
const h1 = <h1>红红火火恍恍惚惚</h1>;

const arr = [<h2 key="1">111</h2>, <h2 key="2">222</h2>];

const strs = ["aaa", "bbb", "ccc"];

// 当需要在JSX内，写一些JS表达式，就可以使用 {...}

var aDiv = <div>这是一个块</div>;

// 特点：自由
const mydiv = (
  <div>
    <h1>{a * 3}</h1>
    <hr/>
    {str}
    <hr/>
    {flag ? "条件为真" : "条件为假"}
    <hr/>
    <p title={title}>这是一个p标签</p>
    <hr/>
    {/* 可以直接嵌入另一个JSX元素 */}
    {h1}
    <hr/>
    {/* 可以直接展示一个数组，数组中的元素甚至可以使JSX */}
    {arr}
    <hr/>
    {strs}
    {/* JSX中的注释写法 */}
    {
      // JSX中的单行注释写法，注意大括号的位置
    }
    {strs.map(e => (
      <h2 key={e}>{e + "~~~"}</h2>
    ))}
    <hr/>
    {/* class 属性要用 className 代替 */}
    {/* for 属性要用 htmlFor 代替 */}
  </div>
);

const appElement = document.querySelector("#app");
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
