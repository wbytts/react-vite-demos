import { produce } from "immer";


const arr = [1, 2, 3];


const newArr = produce(arr, (draft) => { draft[1] = 666 });

console.log(arr);
console.log(newArr);
console.log(arr === newArr)

// 另一种用法
let changeArr = produce((draft) => { draft[1] = 999 });
const newArr2 = changeArr(arr)
console.log(newArr2);
console.log(arr === newArr2)
