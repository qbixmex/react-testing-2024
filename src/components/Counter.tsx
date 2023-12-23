import { FC } from 'react';
import { useCounter } from '../hooks';

type Props = {
  initialValue?: number;
};

const Counter: FC<Props> = ({ initialValue = 0 }) => {
  const {
    counter, handleIncrement, handleDecrement, handleReset,
  } = useCounter({ initialCount: initialValue });

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
