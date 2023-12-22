import { describe, expect, test } from 'vitest';
import { getHeroByIdAsync } from '../../helpers';

describe('Test on async functions', () => {
  test('Should return a hero with given id with then/catch', () => new Promise<void>((done) => {
    const testHero = {
      id: 1,
      name: 'Peter Parker',
      heroName: 'Spiderman',
      studio: 'Marvel',
    };

    getHeroByIdAsync(1)
      .then(hero => {
        expect(hero).toEqual(testHero);
        done();
      });
  }));

  test('Should return an error if hero does not exist with then/catch', () => new Promise<void>((done) => {
    const id = 100;
    getHeroByIdAsync(id)
      .catch(error => {
        if (error instanceof Error) {
          expect(error.message).toBe(`Hero with "${id}" not found !`);
          done();
        }
      });
  }));

  test('Should return an error if hero does not exist with async/await', async () => {
    const id = 100;
    try {
      await getHeroByIdAsync(id);
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe(`Hero with "${id}" not found !`);
      }
    }
  });

  test('Should return a hero with given id with async/await', async () => {
    const testHero = {
      id: 1,
      name: 'Peter Parker',
      heroName: 'Spiderman',
      studio: 'Marvel',
    };
    const hero = await getHeroByIdAsync(1);
    expect(hero).toEqual(testHero);
  });
});
