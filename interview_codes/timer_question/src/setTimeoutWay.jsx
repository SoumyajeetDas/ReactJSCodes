import React, { useEffect, useState } from "react";

const SetTimeoutWay = () => {
  const [counter, setCounter] = useState(0);
  const [type, setType] = useState("add");

  useEffect(() => {
    if (counter > 10) {
      setType("waiting");

      setTimeout(() => {
        setType("substract");
        setCounter((c) => c - 1);
      }, 5000);

      return;
    }
    if (counter === 0 && type === "substract") {
      return;
    }

    let timeout = setTimeout(() => {
      if (type === "add") {
        setCounter((c) => c + 1);
      } else {
        setCounter((c) => c - 1);
      }
    }, 1000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  if (type === "add") {
    return <div>Increasing to {counter}</div>;
  }
  if (type === "substract") {
    return <div>Decreasing to {counter}</div>;
  }
  if (type === "waiting") {
    return <div>Waiting for 5 secs</div>;
  }
};

export default SetTimeoutWay;
