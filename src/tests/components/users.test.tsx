import {
  afterAll, afterEach, beforeAll,
  describe, expect, test,
} from 'vitest';
import { render } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { Users } from '../../components';
import { server } from '../../mocks/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

describe('Tests on <Users /> component', () => {
  test('Should render the component correctly', () => {
    const { getByRole } = render(<Users />);

    const heading = getByRole('heading', {
      level: 1,
      name: /users/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test('Should render list of users', async () => {
    const { findAllByRole } = render(<Users />);

    const users = await findAllByRole('listitem');

    expect(users.length).toBe(3);
  });

  test('Should render error message', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return new HttpResponse(null, {
          type: 'error',
          status: 400,
          statusText: 'Failed to fetch',
        });
      }),
    );

    const { findByText } = render(<Users />);

    const errorMessage = await findByText(/failed to fetch/i);

    expect(errorMessage).toBeInTheDocument();
  });
});
