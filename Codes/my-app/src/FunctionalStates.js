import React, {useState} from 'react';


export default function Stating() {

    
    // let data = "Soumyajeet";
    let [data, setData] = useState("Soumyajeet");
    function update(){
        if(data === "Soumyajeet"){
            setData((prev)=>{
                console.log('Before data');
                data = `Previos State is ${prev} and new state ${'Soumya'}`;
                console.log('After data '+data );
                return (data);
            });
            
            // data = 'Soumya;'
            // console.log(data);
        }
            
        else{
            setData("Soumyajeet");
            data = 'Soumyajeet';
            // console.log(data);
        }
            
    }
    console.log("Rendering only once");
    return (
        <>
            <h1>{data}</h1>
            
            <button className="btn btn-primary" onClick={update}>Click on Functional State</button>
        </>

    );
}