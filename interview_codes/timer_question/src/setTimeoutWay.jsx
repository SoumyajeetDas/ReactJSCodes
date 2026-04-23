import React, { useEffect, useState } from "react";

const SetTimeoutWay = () => {
  const [counter, setCounter] = useState(0);
  const [type, setType] = useState("inc");

  useEffect(() => {
    let timeout;

    // First handle the wait case, then handle the inc and dec cases
    if (type === "wait") {
      setTimeout(() => {
        setType("dec");
        // setCounter((prev) => prev - 1);
      }, 5000);
    }

    // Handle the inc and dec cases
    setTimeout(() => {
      // Inc case
      if (type === "inc" && counter <= 9) {
        setCounter((prev) => prev + 1);
      }
      // Dec case
      else if (type === "dec") {
        // What if the counter goes to 0 while decrementing halt there
        if (counter > 0) setCounter((prev) => prev - 1);
        else return;
      }
      // When inc goes to 10, then wait for 5 secs and then start decrementing
      else {
        setType("wait");
      }
    }, 1000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, type]);

  if (type === "inc") {
    return <div>Increasing to {counter}</div>;
  }
  if (type === "dec") {
    return <div>Decreasing to {counter}</div>;
  }
  if (type === "wait") {
    return <div>Waiting for 5 secs</div>;
  }
};

export default SetTimeoutWay;
