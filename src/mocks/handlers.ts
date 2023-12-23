import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', async () => {
    return HttpResponse.json([
      {
        id: '25012c01-edd3-4dbf-9b1a-8f6bc5b80f93',
        name: 'Michael Jackson',
      },
      {
        id: 'dbf201de-3376-44fe-b79a-1edcbd8a42e0',
        name: 'Curt Cobain',
      },
      {
        id: 'aa7253fd-5679-44c3-a110-f9dd60eeeb58',
        name: 'Peter Parker',
      },
    ]);
  }),
];
