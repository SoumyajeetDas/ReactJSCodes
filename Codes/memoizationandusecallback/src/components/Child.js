import React, { memo } from 'react'

const Child = ({ counter, handleCounter }) => {

    console.log("Child Component Rendering");


    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={() => handleCounter()}>Add</button>
        </div>
    )
}

const ChildMemo = memo(Child)

export default ChildMemo
