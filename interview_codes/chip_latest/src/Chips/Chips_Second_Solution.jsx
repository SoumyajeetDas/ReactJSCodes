import React from "react";

const ChipsSecondSolution = ({ index, value, setChips, chips }) => {
  const handleDelete = (i) => () => {
    let chipData = [...chips];

    chipData[i].isDeleted = true;

    setChips([...chipData]);
  };
  return (
    <div
      onAnimationEnd={(e) => {
        if (e.target.classList.contains("none") && chips[index]?.isDeleted) {
          let data = [...chips];

          data = data.filter((v, i) => i !== index);

          setChips([...data]);
        }
      }}
      className={`chip  ${chips[index]?.isDeleted ? "none" : "active"}`}
    >
      <p>{value}</p>
      <button onClick={handleDelete(index)}>X</button>
    </div>
  );
};

export default ChipsSecondSolution;
