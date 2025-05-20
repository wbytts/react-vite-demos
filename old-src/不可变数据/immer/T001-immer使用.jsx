/*
https://immerjs.github.io/immer/zh-CN/
 */
import { produce } from "immer";

console.log("Hello World");

const arr = [1, 2, 3];

/*
    import { produce } from "immer";

    结果 = produce(对象, 草稿 => {
      草稿相当于传入对象的一个 [副本]
      如果不返回对象, 则将对草稿的操作应用到对象上, 并返回新对象作为结果
      如果返回, 则将返回的值作为结果
    })
*/

const newArr = produce(arr, (draft) => (draft[1] = 666));

console.log(arr);
console.log(newArr);

// 另一种用法
let mf = produce((draft) => (draft[1] = 999));
console.log(mf(arr));
