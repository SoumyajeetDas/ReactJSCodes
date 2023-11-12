import './App.css';
import { useCallback, useState } from 'react';
import ChildMemo from './components/Child';

function App() {

  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(0);

  // Using the useCallback here as the function is passed as reference in the props to the child component. Now each time the parent 
  // component gets rendered due to 'show' state the reference to the handleCounter gets changed. So, useCallback comes to the rescue.
  const handleCounter = useCallback(() => {
    setCounter(prev => prev + 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])


  return (
    <div className="App">
      <ChildMemo counter={counter} handleCounter={handleCounter} />

      {show && <h1>I am Soumyajeet</h1>}
      <button onClick={() => show ? setShow(false) : setShow(true)}>Toggle Show</button>
    </div>
  );
}

export default App;
