import { FC, useState } from 'react';

type Props = {
  initialValue: number;
};

const Counter: FC<Props> = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  const handleDecrement = () => {
    if (counter === 0) return;
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h2>Counter</h2>
      <p aria-label="counter">{ counter }</p>

      <button
        type="button"
        onClick={handleIncrement}
      >
        increment
      </button>

      <button
        type="button"
        onClick={handleReset}
      >
        reset
      </button>

      <button
        type="button"
        onClick={handleDecrement}
      >
        decrement
      </button>
    </>
  );
};

export default Counter;
