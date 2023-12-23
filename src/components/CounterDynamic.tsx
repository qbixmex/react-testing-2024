import { FC } from 'react';

type Props = {
  count: number;
  handleIncrement?: (value: number) => void;
  handleDecrement?: (value: number) => void;
  handleReset?: () => void;
};

const CounterDynamic: FC<Props> = ({
  count,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <>
      <h1>Counter Dynamic</h1>
      <h2>{count}</h2>

      {handleIncrement && (
        <button
          type="button"
          onClick={() => handleIncrement(10)}
        >
          increment
        </button>
      )}

      {handleReset && (
        <button type="button" onClick={handleReset}>
          reset
        </button>
      )}

      {handleDecrement && (
        <button
          type="button"
          onClick={() => handleDecrement(5)}
        >
          decrement
        </button>
      )}
    </>
  );
};

export default CounterDynamic;
