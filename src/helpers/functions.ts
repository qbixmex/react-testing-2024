import { heroes } from '../data/heroes';

export const getGreeting = (name: string) => {
  return `Hello ${name}!`;
};

export const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'sonusbeat',
  };
};

export const getActiveUser = (username: string) => {
  return {
    uid: 'ABC456',
    username,
  };
};

export const getArray = () => {
  return [
    crypto.randomUUID(),
    'John',
    52,
    true,
    {
      ok: true,
      message: 'Well Done',
    },
  ];
};

export const getHeroById = (id: number) => {
  const result = heroes.find(hero => hero.id === id);
  return !result ? null : result;
};

export const getHeroesByStudio = (studio: string) => {
  const result = heroes.filter(hero => hero.studio === studio);

  return !result ? [] : result;
};
