import React, { useRef, useState } from "react";

const Chips = ({ index, handleDelete, value, name }) => {
  return (
    <div className={`chip  ${name}`}>
      <p>{value}</p>
      <button onClick={handleDelete(index)}>X</button>
    </div>
  );
};

const FirstSolution = () => {
  const [chips, setChips] = useState([]);
  const [active, setActive] = useState(-1);
  const ref = useRef(null);

  const handleKeyDown = (e) => {
    let isPresent = chips.find((v) => ref.current.value === v);

    if (e.key === "Enter" && ref.current.value && !isPresent) {
      setChips((prev) => [...prev, ref.current.value]);
    }
  };

  const handleDelete = (i) => () => {
    setActive(i);

    setTimeout(() => {
      setActive(-1);
      let data = [...chips];

      data = data.filter((v, index) => i !== index);

      setChips([...data]);
    }, 500);
  };

  return (
    <>
      <h1>First Solution</h1>
      <input type="text" ref={ref} onKeyDown={handleKeyDown} />

      <div id="wrapper">
        <div id="box">
          {chips?.map((v, i) => (
            <Chips
              key={v}
              index={i}
              handleDelete={handleDelete}
              value={v}
              name={i === active ? "none" : "active"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FirstSolution;
