import React, { useState } from 'react'



export default function Content(props) {

    let [data, setData] = useState('');
    let [words, setWords] = useState(0);

    function wordCount(x) {
        const arr = x.split(/[' '\n]/);
        let n = arr.length - 1;
        // console.log(arr);
        for (let i = 0; i < n; i++) {
            if (arr.indexOf('') > -1) {
                arr.splice(arr.indexOf(''), 1);
                console.log(arr);

            }
        }
        if (arr.length === 1) {
            if (arr[0] === '') { // This part is used when nothing is there in the editor but still the array contains ['']
                setWords(arr.length - 1);
            }
            else {
                setWords(arr.length);
            }

        }
        else {
            setWords(arr.length);

        }

    }

    function update() {
        // console.log(vals);
        setData(data.toUpperCase());
        props.setMsg("Successfully changed the words","danger");
        console.log("Updated");
    }

    function getData(val) {

        setData(val.target.value);
        wordCount(val.target.value);

    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 style={{color:props.mode==='light'?'black':'white'}}>Enter the text to analyze below</h1>
                    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#70CCE1':'white', color:props.mode==='light'?'black':'white'}} value={data} onChange={getData} rows="8"></textarea>
                    <button className="btn btn-primary mt-3" onClick={update} disabled={data.length===0}>Click Here!</button>
                    <h1 style={{color:props.mode==='light'?'black':'white'}}>Summary</h1>
                    <p style={{color:props.mode==='light'?'black':'white'}}>{words} words and {data.length} characters </p>
                    <p style={{color:props.mode==='light'?'black':'white'}}>{0.008 * words} mins required to read</p>
                </div>
            </div>


        </>
    );
}