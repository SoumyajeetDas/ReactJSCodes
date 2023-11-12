import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


export function replaceCapitalLetter(str){
  return str.split(/(?=[A-Z])/).join(' ');
}

function App() {

  const [colorState, setColorState] = useState("red");
  const [disabled, setDisabled] = useState(false);


  const toggleColor = () => {
    colorState === "red" ? setColorState('blue') : setColorState('red')
  }

  return (
    <div className="App">
      <label htmlFor='button-disable'>Check it</label>

      <input
        type='checkbox'
        id="button-disable"
        checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />

      <br />

      <button style={{ backgroundColor: disabled?'grey': colorState }}
        onClick={toggleColor}
        disabled={disabled}
      >
        {colorState === 'red' ? 'Change to Blue' : 'Change to Red'}
      </button>
    </div>
  );
}

export default App;
