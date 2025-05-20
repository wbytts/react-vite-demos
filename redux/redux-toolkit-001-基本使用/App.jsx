import "./App.css"
import { useDispatch, useSelector } from "react-redux"

function App() {

    // 使用状态
    const x = useSelector(state => state.config.x)
    // 使用 dispatch
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch({ type: "config/addX", payload: 1 })}>修改Name</button>
            <h1>{x}</h1>
        </>
    )
}

export default App
