import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0)
    function handleCound(){
     const newCount = count + 1
     setCount(newCount)
    }

    function handleReduce(){
     const newCount = count - 1
     setCount(newCount)
    }
    return (
        <div style={{border: '2px solid yellow'}}>
            <h5>Count: {count}</h5>
            <button onClick={handleCound}>Count</button>
            <button onClick={handleReduce}>Minus</button>
        </div>
    );
};

export default Count;