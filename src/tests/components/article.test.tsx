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
});
