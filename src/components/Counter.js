import { useState } from "react";

const Counter = () => { 
    const [count, setCount] = useState(0)
    function handleAddition() {
        setCount(prev => {
            return prev + 1
        })
     }
    function handleSubtraction() {
        setCount(prev => {
            return prev-1
        })
     }
    function handleReset() {
        setCount(0)
    }
    return (
        <section className="counter">
            <h1>{count}</h1>
            <div className="buttons">
            <button onClick={handleAddition}>+</button>
            <button onClick={handleSubtraction}>-</button>
            <button onClick={handleReset}>Reset</button>
            </div>
        </section>
    )
}

export default Counter