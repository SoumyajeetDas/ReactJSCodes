import './App.css';
import useCounter from './hooks/useCounter.jsx';

function App() {
  const [counter, increement, decreement] = useCounter(0);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increement}>Add</button>
      <button onClick={decreement}>Minus</button>
    </div>
  );
}

export default App;
