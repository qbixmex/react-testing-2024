import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import { App } from '../App';

describe('Tests on <App /> component', () => {
  test('Should render Home Page', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const navbar = container.querySelector('nav');
    const heading = container.querySelector('h1');

    expect(navbar).toBeInTheDocument();
    expect(heading?.textContent).toBe('Home Page');
  });

  test('Should render About Page', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>,
    );

    const heading = container.querySelector('h1');

    expect(heading?.textContent).toBe('About Page');
  });

  test('Should render Not Found Page', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/products/123']}>
        <App />
      </MemoryRouter>,
    );

    const heading = container.querySelector('h1');

    expect(heading?.textContent).toBe('Not Found Page');
  });
});
