import { useState } from 'react';

type Props = {
  initialCount?: number;
};

const useCounterDynamic = ({ initialCount = 0 }: Props = {}) => {
  const [count, setCounter] = useState(initialCount);

  const handleIncrement = (value: number) => {
    setCounter((prevCounter) => prevCounter + value);
  };

  const handleReset = () => {
    setCounter(initialCount);
  };

  const handleDecrement = (value: number) => {
    if (count === 0) return;
    setCounter((prevCounter) => prevCounter - value);
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};

export default useCounterDynamic;
