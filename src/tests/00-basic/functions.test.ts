import { describe, expect, test } from 'vitest';
import {
  getGreeting, getUser, getActiveUser, getArray,
  getHeroById, getHeroesByStudio,
} from '../../helpers';

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

  test('Should return an array', () => {
    // ? Arrange
    const testCase = {
      name: 'John',
      age: 52,
      active: true,
      response: {
        ok: true,
        message: 'Well Done',
      },
    };

    // ? Act
    const [uid, name, age, active, response] = getArray();

    // ? Assert
    expect(uid).toEqual(expect.any(String));
    expect(name).toBe(testCase.name);
    expect(age).toBe(testCase.age);
    expect(active).toBe(testCase.active);
    expect(response).toEqual(testCase.response);
  });

  test('Should return null if hero was not found', () => {
    // ? Arrange
    const id = 100;

    // ? Act
    const hero = getHeroById(id);

    // ? Assert
    expect(hero).toBe(null);
    expect(hero).toBeFalsy();
  });

  test('Should return a hero by id', () => {
    // ? Arrange
    const id = 1;
    const testHero = {
      id: 1,
      name: 'Peter Parker',
      heroName: 'Spiderman',
      studio: 'Marvel',
    };

    // ? Act
    const hero = getHeroById(id);

    // ? Assert
    expect(hero).toEqual(testHero);
  });

  test('Should return [] if there weren\'t results', () => {
    // ? Arrange
    const studio = 'toei';

    // ? Act
    const heroes = getHeroesByStudio(studio);

    // ? Assert
    expect(heroes).toEqual([]);
    expect(heroes).toBeTruthy();
    expect(heroes).not.toBeFalsy();
  });

  test('Should return a heros by studio', () => {
    // ? Arrange
    const studio = 'Marvel';
    const testObject = {
      heroName: 'Captain America',
      id: 5,
      name: 'Steve Rogers',
      studio: 'Marvel',
    };

    // ? Act
    const heroes = getHeroesByStudio(studio);

    // ? Assert
    expect(heroes).toEqual(expect.any(Array));
    expect(heroes[0].heroName).toBe('Spiderman');
    expect(heroes[4]).toEqual(testObject);
    expect(heroes.length).toBe(6);
  });
});
