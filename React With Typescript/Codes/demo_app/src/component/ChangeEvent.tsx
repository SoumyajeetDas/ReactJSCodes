import React from 'react'

const ChangeEvent = () => {

    const handleButton = (e: React.MouseEvent<HTMLButtonElement>): void => {
        alert("Hello")
    }

    let handleText = (event: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange={(event)=>handleText(event)}></input>
            <button onClick={handleButton}>Click</button>
        </div>
    )
}

export default ChangeEvent
