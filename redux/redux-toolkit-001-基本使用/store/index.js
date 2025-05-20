import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./user.js"
import { configSlice } from "./config.js"

export const store = configureStore({
    reducer: {
        // 这边的键值经测试影响 getState 之后的读取
        user: userSlice.reducer,
        config: configSlice.reducer,
    }
})

/*
    这里的 type 前面的名字，参考 slice 里的 name
    store.dispatch({type: 'config/addX', payload: 1})
*/
