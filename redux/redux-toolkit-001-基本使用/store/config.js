import { createSlice } from "@reduxjs/toolkit"

export const configSlice = createSlice({
    name: "config",
    initialState: {
        x: 1
    },
    reducers: {
        addX: (state, action) => {
            state.x = state.x + action.payload
        }
    }
})
