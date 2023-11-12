import React from 'react'

import propTypes from 'prop-types'

// function alerting(){
//     alert("Hi Soumyajeet ")
//   }

export default function events(props){
    function alerting(x){
        alert("Hi Soumyajeet "+x);
    }
    return (
        <button onClick={()=>alerting(props.value)} >Click me</button>
    );
}

// export default class events extends React.Component{
//     alerting(){
//         alert("Hi Soumyajeet ")
//       }
    
//     render(){
//         return (
//             <button onClick={()=>{this.alerting();}}>Click me</button>
//         );

//     }
    
    
// }

// export default class events extends React.Component{
//     // alerting(){
//     //     alert("Hi Soumyajeet ")
//     //   }
    
//     render(){
//         return (
//             <button onClick={()=>{alerting();}}>Click me</button>
//         );

//     }
// }

events.propTypes = { value: propTypes.number,}

events.defaultProps = {value:5}