import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Article } from '../../components';

describe('Tests on <Article /> component', () => {
  test('Should render with default props', () => {
    const { getByRole, getByText, getByTestId } = render(
      <Article>Lorem ipsum asimet exelsious deu</Article>,
    );

    const heading = getByRole('heading', { level: 1 });
    const subHeading = getByRole('heading', {
      level: 2,
      name: 'No Subheading',
    });
    const text = getByText(/lorem ipsum/i);
    const price = getByTestId('price');

    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(heading).toHaveTextContent('No Title');
    expect(subHeading).toHaveTextContent('No Subheading');
  });

  test('Should render with provided props', () => {
    const text1 = 'Test Heading';
    const text2 = 'Test Subheading';
    const text3 = 'Test Content';
    const price = 7.95;

    const { getByRole, getByTestId } = render(
      <Article
        heading={text1}
        subHeading={text2}
        price={price}
      >
        {text3}
      </Article>,
    );

    const heading = getByRole('heading', { level: 1 });
    const subHeading = getByRole('heading', {
      level: 2,
      name: text2,
    });
    const main = getByTestId('main');

    expect(heading).toHaveTextContent(text1);
    expect(subHeading).toHaveTextContent(text2);
    expect(main).toHaveTextContent(text3);
  });

  test('Should match with snapshot', () => {
    const text1 = 'Test Heading';
    const text2 = 'Test Subheading';
    const text3 = 'Test Content';
    const price = 32.55;

    const { container } = render(
      <Article
        heading={text1}
        subHeading={text2}
        price={price}
      >
        {text3}
      </Article>,
    );

    expect(container).toMatchSnapshot();
  });

  test('Should contain several html tags', () => {
    const text1 = 'Test Heading';
    const text2 = 'Test Subheading';
    const text3 = 'Test Content';
    const price = 25.95;

    const { container, getByTestId } = render(
      <Article
        heading={text1}
        subHeading={text2}
        price={price}
      >
        {text3}
      </Article>,
    );

    const heading = getByTestId('heading')?.textContent?.trim() as string;
    const subheading = getByTestId('subheading')?.textContent?.trim() as string;
    const paragraph = getByTestId('price')?.innerHTML?.trim() as string;
    const p = container.querySelector('#price-value')?.textContent?.trim() as string;

    expect(heading).toBe(text1);
    expect(subheading).toBe(text2);
    expect(Number(p)).toBe(price);
    expect(paragraph).toContain('$');
    expect(paragraph).toContain(price);
    expect(paragraph).toBe(`$&nbsp;<span id="price-value">${price}</span>`);
    expect(getByTestId('main')).toBeInTheDocument();
  });
});
