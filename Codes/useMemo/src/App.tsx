import React, { useMemo, useState } from 'react';
import './App.css';

const App: React.FC =()=> {

  const [show, setShow] = useState<boolean>(true);

  const [counter, setCounter] = useState<number>(0);

  const handleCounter = ():void=>{
    setCounter((prevState) => {
      return prevState+1
    })
  }

  const countMynumber = (num:number)=>{
    console.log("Started Calculating")

    // Costly function
    for(let i=0; i<= 10000000; i++){}

    return num
  }


  // If you are using useMemmo need to ask few questions before we are using it:
  // 1. Is the function really a costly function
  // 2. Are we passing the function as reference to a child component
  // 3. If yes then what is the return type of the function.
  // 4. If we are using useEffect or React.memo inside the child component then if the return type is a primitive type then the child
  // component will no rerender for React.memo or useEffect will aslo not be executed.
  // 5. If the return type is an object type (like an array or object) then rerender will happen in case of React.memo or useEffect will
  // also get executed as the reference changes which doesn't happens for useMemo.
  const checkData = useMemo(
    ()=>{
      return countMynumber(counter)
    },
    [counter]
  )


  // The countMyNumber gets rendered even when state of show just changes. Bcoz whenever the state gets changed the whole component gets 
  // rerendered and as a result countMyNumber() gets executee again during JS Hoisting.
  // const checkData = countMynumber(counter);


  return (
    <div className="App">
      <h2>Counter : {checkData}</h2>
      <button onClick={()=>handleCounter()}>Add</button>

      {show && <h1>I am Soumyajeet</h1>}
      <button onClick={()=>show? setShow(false): setShow(true)}>Toggle Show</button>

    </div>
  );
}

export default App;
