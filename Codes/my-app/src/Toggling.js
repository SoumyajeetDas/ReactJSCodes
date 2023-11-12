import React, {useState} from 'react'

export default function Toggling() {
  const [data,setData] = useState(true) ;
  const [btnName,setBtn] = useState("Toggle to see") ;
  
  function update(){

    
      setData(false);

      if(btnName==="Toggle to See"){
          setBtn("Toggle to Hide");
          setData(true);
      }
      else{
        setBtn("Toggle to See");
        setData(false);
      }
  }
  return (
    <>
    <div>
        {data?<h1>I am Soumyajeet</h1>:undefined}
    </div>
    <button className="btn btn-success" onClick={update}>{btnName}</button>
    </>
  )
}
