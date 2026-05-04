import React, { useState } from "react";

const ChipsFirstSolution = ({ index, value, setChips, chips }) => {
  const [active, setActive] = useState(-1);

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
    <div
      onAnimationEnd={(e) => {
        if (e.target.classList.contains("none") && active === index) {
          let data = [...chips];

          data = data.filter((v, i) => i !== index);

          setChips([...data]);
        }
      }}
      className={`chip  ${active === index ? "none" : "active"}`}
    >
      <p>{value}</p>
      <button onClick={handleDelete(index)}>X</button>
    </div>
  );
};

export default ChipsFirstSolution;
