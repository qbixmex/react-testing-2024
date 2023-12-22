import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Article from '../../components/Article';

describe('Tests on <Article /> component', () => {
  test('Should render with default props', () => {
    render(
      <Article>Lorem ipsum asimet exelsious deu</Article>,
    );

    const heading = screen.getByRole('heading', { level: 1 });
    const subHeading = screen.getByRole('heading', { level: 2 });
    const text = screen.getByText(/lorem ipsum/i);

    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(heading).toHaveTextContent('No Title');
    expect(subHeading).toHaveTextContent('No Subheading');
  });

  test('Should render with provided props', () => {
    const text1 = 'Test Heading';
    const text2 = 'Test Subheading';
    const text3 = 'Test Content';

    render(
      <Article heading={text1} subHeading={text2}>
        {text3}
      </Article>,
    );

    const heading = screen.getByRole('heading', { level: 1 });
    const subHeading = screen.getByRole('heading', { level: 2 });
    const main = screen.getByTestId('main');

    expect(heading).toHaveTextContent(text1);
    expect(subHeading).toHaveTextContent(text2);
    expect(main).toHaveTextContent(text3);
  });

  test('Should match with snapshot', () => {
    const text1 = 'Test Heading';
    const text2 = 'Test Subheading';
    const text3 = 'Test Content';

    const { container } = render(
      <Article heading={text1} subHeading={text2}>
        {text3}
      </Article>,
    );

    expect(container).toMatchSnapshot();
  });

  test('Should contain an h2', () => {
    const text1 = 'Test Heading';
    const text2 = 'Test Subheading';
    const text3 = 'Test Content';

    const { container } = render(
      <Article heading={text1} subHeading={text2}>
        {text3}
      </Article>,
    );

    const h1 = container.querySelector('h1')?.textContent?.trim() as string;
    const h2 = container.querySelector('h2')?.textContent?.trim() as string;
    const price = container.querySelector('#price')?.textContent?.trim() as string;

    expect(h1).toBe(text1);
    expect(h2).toBe(text2);
    expect(Number(price)).toBe(5.75);
  });
});
