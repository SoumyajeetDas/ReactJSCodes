import { useEffect, useState } from "react";
import "./App.css";

let data = [
  {
    color: "red",
    delay: 4000,
  },
  {
    color: "yellow",
    delay: 500,
  },
  {
    color: "green",
    delay: 3000,
  },
];

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setTimeout(() => {
      setCount((prev) => {
        return (prev + 1) % 3;
      });
    }, data[count].delay);

    return () => clearTimeout(interval);
  }, [count]);

  return (
    <div className="App">
      <div id="box">
        <div
          id="red"
          className={data[count].color === "red" ? "color" : "none"}
        ></div>
        <div
          id="yellow"
          className={data[count].color === "yellow" ? "color" : "none"}
        ></div>
        <div
          id="green"
          className={data[count].color === "green" ? "color" : "none"}
        ></div>
      </div>
    </div>
  );
}

export default App;
