import { describe, expect, test } from 'vitest';
import { getGreeting, getUser, getActiveUser } from '../../helpers';

describe('Test on basic functions', () => {
  test('Should return a greeting with provided name', () => {
    // ? Arrange
    const name = 'John';

    // ? Act
    const greeting = getGreeting(name);

    // ? Assert
    expect(greeting).toBe(`Hello ${name}!`);
  });

  test('Should return an expected object', () => {
    // ? Arrange
    const testUser = {
      uid: 'ABC123',
      username: 'sonusbeat',
    };

    // ? Act
    const user = getUser();

    // ? Assert
    expect(user).toEqual(testUser);
  });

  test('Should return an expected object with provided argument', () => {
    // ? Arrange
    const testUser = {
      uid: 'ABC456',
      username: 'qbix',
    };

    // ? Act
    const user = getActiveUser(testUser.username);

    // ? Assert
    expect(user).toEqual(testUser);
  });
});
