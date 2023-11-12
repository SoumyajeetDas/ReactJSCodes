
import { useState } from 'react';
import './App.css';
import Content from './component/Content';
import { CommonContext } from './CommonContext.js'


const App = () => {

  const [state, setState] = useState({ data1: "Soumyajeet", data2: "Das" });

  function Alerting(data) {
    alert(data);
  }


  function change() {
    if (state.data1 === "Soumyajeet")
      setState({ data1: "Soumya", data2: "Das" })
    else
      setState({ data1: "Soumyajeet", data2: "Das" })
  }
  return (
    <>
      
      {/* If we pass the props within the value prop then all the Components and all there child components and again there child like
      this to the lowest level within the Provider Component will be able to access the props. So here the state and Alerting prop 
      can be accessed by the Context and the child to the lowest level. */}
      <CommonContext.Provider value={{ state, Alerting }}>
        <Content />

        <button style={{ marginLeft: '45vw', marginTop: '20px', padding: '10px', borderRadius: '10px' }} onClick={change}>Click Here</button>

      </CommonContext.Provider>
    </>

  );
}

export default App;
