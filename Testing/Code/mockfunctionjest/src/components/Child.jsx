import React from 'react';

const Child = ({ counter, handleCounter }) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>Add</button>
    </div>
  );
};

export default Child;
