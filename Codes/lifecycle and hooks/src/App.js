// import logo from './logo.svg';
import './App.css';
import Rendering from './RenderLifeCycle.js'
import React, { useState } from 'react'
import Effect from './UseEffectCheck.js'
import MemoHook from './MemoHook';
import RefCheck from './RefCheck';

function App() {

  let [data,setData] = useState("");

  function update(){
    if(data==="Anil")
    {
      setData("Sindhu")
    } 
    else{
      setData("Anil")
    }
  }

  return (
    <>
      {/* <Rendering data={data}/>
      <button className="btn btn-primary" onClick={update}>Click Here</button>

      <Effect/> */}

      <MemoHook/>
      <RefCheck/>
    </>
  );
}

export default App;
