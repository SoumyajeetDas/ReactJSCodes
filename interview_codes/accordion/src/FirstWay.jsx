import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const FirstWay = () => {
  const [active, setActive] = useState(-1);
  const [closing, setIsClosing] = useState(-1);
  const handleButton = (i) => () => {
    // When you try to close the same accordion which is already open, it will close it.
    if (i === active) {
      setIsClosing(i);
      setTimeout(() => {
        setActive(-1);
        setIsClosing(-1);
      }, 200);

      return;
    } else if (active === -1) {
      // First time or when nothing is open
      setActive(i);
    } else {
      setIsClosing(active);

      setTimeout(() => {
        setActive(i);
      }, 200);
    }
  };

  return (
    <div className="App">
      {[...Array(5)].map((_, i) => (
        <div className="accordion" onClick={handleButton(i)}>
          <div className="header">
            <h3>Accord</h3>
            {i === active ? <ChevronUp /> : <ChevronDown />}
          </div>
          {i === active && (
            <div
              className={`body ${
                i === active && i === closing // This is when you click on the same accordion which is already open, it will close it.
                  ? "not-active"
                  : i === active
                    ? "active"
                    : "no-active"
              }`}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                numquam a eius natus nisi culpa dignissimos repellat itaque
                incidunt vel autem voluptate, fugiat similique nemo ducimus
                consequuntur. Excepturi, dolores ducimus.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FirstWay;
