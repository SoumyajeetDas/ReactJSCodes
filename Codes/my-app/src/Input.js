// import React, { useState } from 'react'

import React, { Component } from 'react'


// export default function Input() {

//     const [data, setData] = useState("");
//     function getData(val) {
//         // console.log(val.target.value);
//         setData(val.target.value);
//     }

//     return (
//         <>
//             <h1>{data}</h1>

//             <input type="text" className="form-control" onChange={(val)=>getData(val)}></input>
//         </>

//     );
// }

export default class Input extends Component {

    constructor(){
        super();
        this.state={
            data:""
        };
    }
    getData(val) {
        // console.log(val.target.value);
        this.setState({data:val.target.value});
    }

    render() {
        return (
            <>
                <h1>{this.state.data}</h1>
                <input type="text" className="form-control" onChange={(value) => this.getData(value)}></input>
                
            </>
        );
    }
}