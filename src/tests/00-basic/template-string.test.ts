import { describe, expect, test } from 'vitest';
import getGreeting from '../../helpers/template-string';

describe('Test on basic functions', () => {
  test('Should return a greeting with provided name', () => {
    // ? Arrange
    const name = 'John';

    // ? Act
    const greeting = getGreeting(name);

    // ? Assert
    expect(greeting).toBe(`Hello ${name}!`);
  });
});
