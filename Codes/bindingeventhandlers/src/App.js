import { Component } from 'react';
import './App.css';
import Content from './component/Content';


class App extends Component{

  constructor(){
    super()

    this.state={
      value:true,
    }

    this.toggle=this.toggle.bind(this); // This the method people use as using arrow function is in experimental process
  }

  toggle(){
    if(this.state.value===true){
      this.setState({value:false})
    }
    else{
      this.setState({value:true})
    }
  }


  render() {
    return (
      <>
        <div className="container my-5">
          <div style={{ display: 'flex', justifyContent: "space-around", alignItems: 'center' }}>

            <div style={{ height: "502px" }}>
              <button className="btn btn-primary" onClick={this.toggle}>Toggle</button>
            </div>
            <div style={{ height: "502px", width: "500px" }}>
              {this.state.value && <Content />}
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default App;
