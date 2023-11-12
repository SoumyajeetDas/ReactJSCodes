// import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'
import Alerting from './Events.js'
import FuncStates from './FunctionalStates.js'
import ClassStates from './ClassState.js'
import ClassProps from './ClassProp.js'
import Input from './Input.js'
import { useState } from 'react';
import Toggling from './Toggling';

function App() {

  const [data, setData] = useState("Soumyajeet");
  function update() {

    if (data === "Soumyajeet")
      setData("Soumya");
    else
      setData("Soumyajeet")

  }

  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React With Soumyajeet
    //     </a>
    //   </header>
    // </div>
    <>

       <Header />
      <Content />
      <Footer />
      <Alerting value={3} />


      <div className="container">
        <div className="row">
          <div className="col-6">
            <FuncStates />
          </div>
          <div className="col-6">
            <ClassStates />
          </div>
        </div>
      </div>

      {/* <div className="container my-5">
        <div className="row">
          <ClassProps value={data}/>
          <button class="btn btn-outline-danger" onClick={update}>ClassProp</button>
        </div>
      </div> */}

      {/* <div className="container">
        <div className="row">
          <div className="col-6">
            <Input/>
          </div>
        </div>
      </div>  */}

      {/* <div className="container">
        <div className="row">
          <div className="col-6">
          <Toggling />
          </div>
        </div>
      </div> */}

     

    </>

  );
}

export default App;
