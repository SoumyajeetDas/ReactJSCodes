import React, { useRef, useState } from "react";


const Chips = ({ value, isDeleted, handleDelete, index }) => {
  return (
    <div className={`chip  ${isDeleted ? "none" : "active"}`} key={value}>
      <p>{value}</p>
      <button onClick={handleDelete(index)}>X</button>
    </div>
  );
};
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
            <Chips
              key={v?.value}
              value={v?.value}
              isDeleted={v?.isDeleted}
              handleDelete={handleDelete}
              index={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondSolution;
