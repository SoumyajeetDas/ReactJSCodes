import React, { useRef, useState } from "react";

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

  const handleDelete = (i) => () => {
    let chipData = [...chips];

    chips[i].isDeleted = true;

    setChips([...chipData]);

    setTimeout(() => {
      let data = [...chips];

      data = data.filter((v, index) => i !== index);

      setChips([...data]);
    }, 500);
  };

  return (
    <>
      <h1>Second Solution</h1>
      <input type="text" ref={ref} onKeyDown={handleKeyDown} />

      <div id="wrapper">
        <div id="box">
          {chips?.map((v, i) => (
            <div
              className={`chip  ${v?.isDeleted ? "none" : "active"}`}
              key={v?.value}
            >
              <p>{v?.value}</p>
              <button onClick={handleDelete(i)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondSolution;
