import { describe, expect, test } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Counter } from '../../components';

describe('Tests on <Navigation /> component', () => {
  test('Should render with default props', () => {
    const value = 10;

    const { getByLabelText, getByRole } = render(
      <Counter initialValue={value} />,
    );

    const counter = getByLabelText('counter');
    const incrementButton = getByRole('button', { name: /increment/i });
    const decrementButton = getByRole('button', { name: /decrement/i });

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent(value.toString());
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  test('Should increment the counter', () => {
    const value = 10;

    const { getByLabelText, getByRole } = render(
      <Counter initialValue={value} />,
    );

    const counter = getByLabelText('counter');
    const incrementButton = getByRole('button', { name: /increment/i });

    fireEvent.click(incrementButton);

    expect(counter).toHaveTextContent('11');
  });

  test('Should decrement the counter', () => {
    const value = 5;

    const { getByLabelText, getByRole } = render(
      <Counter initialValue={value} />,
    );

    const counter = getByLabelText('counter');
    const decrementButton = getByRole('button', { name: /decrement/i });

    fireEvent.click(decrementButton);

    expect(counter).toHaveTextContent('4');
  });

  test('Should not decrement if value is zero', () => {
    const value = 0;

    const { getByLabelText, getByRole } = render(
      <Counter initialValue={value} />,
    );

    const counter = getByLabelText('counter');
    const decrementButton = getByRole('button', { name: /decrement/i });

    fireEvent.click(decrementButton);

    expect(counter).toHaveTextContent('0');
  });

  test('Should reset the counter to initial value', () => {
    const value = 8;

    const { getByLabelText, getByRole } = render(
      <Counter initialValue={value} />,
    );

    const counter = getByLabelText('counter');
    const incrementButton = getByRole('button', { name: /increment/i });
    const resetButton = getByRole('button', { name: /reset/i });

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    expect(counter).toHaveTextContent('10');

    fireEvent.click(resetButton);

    expect(counter).toHaveTextContent('8');
  });
});
