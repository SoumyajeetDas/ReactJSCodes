import React, { useRef, useState } from "react";
import ChipsFirstSolution from "../Chips/Chips_First_Solution";

const FirstSolution = () => {
  const [chips, setChips] = useState([]);
  const ref = useRef(null);

  const handleKeyDown = (e) => {
    let isPresent = chips.find((v) => ref.current.value === v);

    if (e.key === "Enter" && ref.current.value && !isPresent) {
      setChips((prev) => [...prev, ref.current.value]);
    }
  };

  return (
    <>
      <h1>First Solution</h1>
      <input type="text" ref={ref} onKeyDown={handleKeyDown} />

      <div id="wrapper">
        <div id="box">
          {chips?.map((v, i) => (
            <ChipsFirstSolution
              key={v}
              index={i}
              // handleDelete={handleDelete}
              value={v}
              // name={i === active ? "none" : "active"}
              // active={active}
              setChips={setChips}
              chips={chips}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FirstSolution;
