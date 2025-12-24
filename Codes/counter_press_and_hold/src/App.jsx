import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const handleMouseDown = (value) => () => {
    if (ref.current) return;

    // This is given, so that if you just click and not hold the button, it still increments/decrements once
    if (value === "ADD") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }

    ref.current = setInterval(() => {
      if (value === "ADD") {
        setCount((prev) => prev + 1);
      } else {
        setCount((prev) => prev - 1);
      }
    }, 100);
  };

  const handleMouseUp = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onMouseDown={handleMouseDown("ADD")}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          +
        </button>
        {count}
        <button
          onMouseDown={handleMouseDown("SUBSTRACT")}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          -
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
