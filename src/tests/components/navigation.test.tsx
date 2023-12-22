import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navigation } from '../../components';

describe('Tests on <Navigation /> component', () => {
  test('Should render with default props', () => {
    const { getByRole, getAllByRole } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    const navList = getByRole('list');
    const items = getAllByRole('listitem');
    const homeLink = getByRole('link', { name: 'Home' });
    const aboutLink = getByRole('link', { name: 'About' });

    expect(navList).toBeInTheDocument();
    expect(items.length).toBe(2);
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});
