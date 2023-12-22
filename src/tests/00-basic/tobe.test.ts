import { describe, expect, test } from 'vitest';

describe('Basics Tests', () => {
  test('Should match values', () => {
    // ? Arrange
    const text1 = 'lorem ipsum dolor sit amet';

    // ? Act
    const text2 = text1.trim();

    // ? Assert
    expect(text1).toBe(text2);
  });
});
