import { useState } from 'react';
import './App.css';
import Child from './components/Child.jsx';

let handleCounter = () => {};
function App() {
  const [counter, setCounter] = useState(0);

  handleCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <Child counter={counter} handleCounter={handleCounter} />
    </div>
  );
}

export default App;
