import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "张三",
        age: 18,
        sex: "男"
    },
    reducers: {
        setName(state, action) {
            // 这个 state 并不是原始的状态，而是一个拷贝过来的 “草稿状态”
            // Redux Toolkit 允许我们在 reducers 写 “可变” 逻辑
            // 并不是真正的改变状态值
            // 使用了 immer 库，可以检测到 “草稿状态” 的变化并且基于这些变化产生新的不可变状态
            state.name = action.payload
            // 可以 return 新的状态

            // 修改 state 和返回新的值，不要一起使用，选择一种
        },
        setAge: (state, action) => state.age = action.payload,
    }
})
