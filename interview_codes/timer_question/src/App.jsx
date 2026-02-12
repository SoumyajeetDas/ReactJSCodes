import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState("add");

  useEffect(() => {
    let interval = setInterval(() => {
      if (count > 9 && state === "add") {
        let timeout = setTimeout(() => {
          setState("minus");

          clearTimeout(timeout);
        }, 5000);

        setCount(count - 1);

        setState("rest");

        return;
      }

      if (count === 0 && state === "minus") {
        return;
      }

      if (state === "add") {
        setCount((prev) => prev + 1);
      } else if (state === "minus") {
        setCount((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count, state]);

  if (state === "add") {
    return <div className="App">Increasing to {count}</div>;
  } else if (state === "minus") {
    return <div className="App">Decreasing to {count}</div>;
  } else {
    return <div className="App">5 sec rest</div>;
  }
}
