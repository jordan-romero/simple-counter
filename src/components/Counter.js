import React, { useState }from 'react'

const Counter = () => {
    
    const [count, updateCount] = useState(0)

    return (
        <div>
            <p>The count is {count}</p>
            <button onClick={() => updateCount(count + 1)}>+</button>
            <button onClick={() => updateCount(count - 1)}>-</button>
        </div>
    )
}

export default Counter
