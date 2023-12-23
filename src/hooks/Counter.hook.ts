import { useState } from 'react';

type Props = {
  initialCount?: number;
};

const useCounter = ({ initialCount = 0 }: Props = {}) => {
  const [counter, setCounter] = useState(initialCount);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleReset = () => {
    setCounter(initialCount);
  };

  const handleDecrement = () => {
    if (counter === 0) return;
    setCounter((prevCounter) => prevCounter - 1);
  };

  return {
    counter,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};

export default useCounter;
