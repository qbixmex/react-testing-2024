import { describe, expect, test } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../hooks';

describe('Tests on useCounter Hook', () => {
  test('Should render the initial value', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.counter).toBe(0);
  });

  test('Should accept a provided value', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.counter).toBe(10);
  });

  test('Should increment the value', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 5,
      },
    });

    act(() => {
      result.current.handleIncrement();
    });

    expect(result.current.counter).toBe(6);
  });

  test('Should decrement the value', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 5,
      },
    });

    act(() => {
      result.current.handleDecrement();
    });

    expect(result.current.counter).toBe(4);
  });

  test('Should reset the value', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 8,
      },
    });

    act(() => {
      result.current.handleIncrement();
      result.current.handleIncrement();
    });

    expect(result.current.counter).toBe(10);

    act(() => result.current.handleReset());

    expect(result.current.counter).toBe(8);
  });
});
