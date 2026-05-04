import React, { useRef, useState } from "react";
import ChipsSecondSolution from "../Chips/Chips_Second_Solution";

const SecondSolution = () => {
  const [chips, setChips] = useState([]);
  const ref = useRef(null);

  const handleKeyDown = (e) => {
    let isPresent = chips.find((v) => ref.current.value === v?.value);

    if (e.key === "Enter" && ref.current.value && !isPresent) {
      setChips((prev) => [
        ...prev,
        { value: ref.current.value, isDeleted: false },
      ]);
    }
  };

  return (
    <>
      <h1>Second Solution</h1>
      <input type="text" ref={ref} onKeyDown={handleKeyDown} />

      <div id="wrapper">
        <div id="box">
          {chips?.map((v, i) => (
            <ChipsSecondSolution
              key={v?.value}
              value={v?.value}
              setChips={setChips}
              chips={chips}
              index={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondSolution;
