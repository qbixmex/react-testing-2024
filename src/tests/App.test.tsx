import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from '../App';

describe('Tests on <App /> component', () => {
  test('Should contains HTML Elements', () => {
    // * Arrange
    const { debug, container } = render(<App />);
    const heading = container.querySelector('h1');
    const text1 = container.querySelector('#paragraph');

    debug();

    // ? Query by role.
    const subHeading = screen.getByRole('heading', {
      level: 2,
      name: /sub-heading text/i,
    });

    // ? Query by text.
    const text2 = screen.getByText(/lorem ipsum/i);

    // ? Act
    // ? User interactions like click, submit, etc.

    // * Assert
    expect(heading?.textContent).toBe('Hello World');
    expect(subHeading).toBeInTheDocument();
    expect(text1?.textContent).toBe('Lorem ipsum');
    expect(text2).toHaveTextContent('Lorem ipsum');
  });
});
