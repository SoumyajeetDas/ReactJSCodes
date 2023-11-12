import React, { useRef } from 'react'

export default function RefCheck() {
    const inpRef = useRef(null);
    const selRef= useRef(null);

    function show() {
        inpRef.current.style.color="red";
        inpRef.current.style.backgroundColor="green";
        selRef.current.style.display="none";
    }

    return (
        <>
            <input type='text' ref={inpRef}></input>
            <select ref={selRef}>
                <option >--Select any Option--</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <button onClick={show}>Click Here</button>
        </>
    )
}
