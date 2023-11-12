import React, {Component} from 'react'

export default class Statings extends Component {
    constructor()
    {
        super();
        this.state = {
            data1:"Soumyajeet",
            data2:"Soumyajeet"
        }
    }

   Update(){
       if(this.state.data1 ==="Soumyajeet"){
           this.setState({
               data1:`Present Stae : ${this.state.data1} and current state : ${'Soumya'}`
            });
       }
       else{
            this.setState({
                data1:"Soumyajeet"
            });
       }
   }

    render(){
        return(
            <>
                <h1>{this.state.data1}</h1>
                <h1>{this.state.data2}</h1>

                <button className="btn btn-outline-success" onClick={()=>this.Update()}>Click on Class State</button>
            </>
        );
    }
   
}
