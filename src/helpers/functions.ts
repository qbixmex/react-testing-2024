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
