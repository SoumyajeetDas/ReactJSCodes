
import { useState } from 'react';
import './App.css';
import Content from './classcomponent/Content';

function App() {

  const [state, setState] = useState(true);
 

  const toggle = () => {
    if (state === true) {
      setState(false);
    }
    else {
      setState(true);
    }
  }


  return (
    <div className="container my-5">
      <div style={{ display: 'flex', justifyContent: "space-around", alignItems: 'center' }}>

        <div style={{ height: "502px" }}>
          <button className="btn btn-primary" onClick={toggle}>Toggle</button>
        </div>
        <div style={{ height: "502px", width: "500px" }}>
          {state && <Content/>}
          {!state && <h5>Component has been Unmounted</h5>}
        </div>
      </div>
    </div>
  );
}

export default App;
