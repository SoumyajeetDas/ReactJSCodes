import React, { useEffect,useState } from 'react'

export default function Effect(){
    const [counter, setCounter] = useState(0);

    function Update(){
        setCounter(counter+1);
    }

    useEffect(()=>{
        console.log("I am useEffect");
    });

    return(
        <>
            <h1>Count : {counter}</h1>
            <button class ="btn btn-success" onClick={Update}>Click Here</button>
        </>
    );
}