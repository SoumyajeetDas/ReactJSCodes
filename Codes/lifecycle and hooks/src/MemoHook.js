import React, { useState, useMemo } from 'react'

export default function MemoHook() {


let [count,setCount]=useState(0);
let [item,setItem]=useState(10);

  console.log("Hi I am outsider");

//   function multiCount(){
//       console.log("I am in multicount");
//       return count*5;
//   }

let multiCountMemo = useMemo(  function multiCount(){
    console.log("I am in multicount");
    return count*5;
},[count])

  return (
      <div className="container">
          <div className="row">
              <div className="col-md-6 my-5">
                {/* <h1>{multiCount()}</h1> */}
                <h1>{multiCountMemo}</h1>
                <h1>Counter : {count}</h1>
                <h1>Item : {item}</h1>
                {console.log("Updated the Data")}
                <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Click Here</button>
                <button className="btn btn-success" onClick={()=>setItem(item*10)}>Click Here</button>
              </div>
          </div>
      </div>
  )
}
