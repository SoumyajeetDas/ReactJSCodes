import { useState } from 'react';

const useCounter = (value) => {
  const [counter, setCounter] = useState(value);

  const increement = () => {
    setCounter(counter + 1);
  };

  const decreement = () => {
    setCounter(counter - 1);
  };

  return [counter, increement, decreement];
};

export default useCounter;
