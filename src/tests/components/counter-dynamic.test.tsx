import { fireEvent, render } from '@testing-library/react';
import {
  describe, expect, test, vi,
} from 'vitest';
import { CounterDynamic } from '../../components';

describe('Tests on <CounterDynamic /> component', () => {
  test('Should render with default props', () => {
    const { getByRole } = render(<CounterDynamic count={100} />);

    const heading = getByRole('heading', {
      level: 1,
      name: 'Counter Dynamic',
    });

    const value = getByRole('heading', { level: 2 });

    // debug();
    expect(heading).toBeInTheDocument();
    expect(value.innerHTML).toBe('100');
  });

  test('Should call handlers', () => {
    const handleIncrement = vi.fn();
    const handleDecrement = vi.fn();
    const handleReset = vi.fn();

    const { getByRole } = render(
      <CounterDynamic
        count={10}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />,
    );

    const incrementBtn = getByRole('button', { name: /increment/i });
    const decrementBtn = getByRole('button', { name: /decrement/i });
    const resetBtn = getByRole('button', { name: /reset/i });

    fireEvent.click(incrementBtn);
    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleIncrement).toHaveBeenCalledWith(10);

    fireEvent.click(decrementBtn);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledWith(5);

    fireEvent.click(resetBtn);
    expect(handleReset).toHaveBeenCalled();
  });
});
