import React, { useState }from 'react'

const Counter = () => {
    
    const [count, updateCount] = useState(0)

    return (
        <div>
            <p>The count is {count}</p>
        </div>
    )
}

export default Counter
