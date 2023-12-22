import { FC } from 'react';

type Props = {
  heading?: string;
  subHeading?: string;
  price?: number;
  children: string;
};

const Article: FC<Props> = ({
  heading = 'No Title',
  subHeading = 'No Subheading',
  price = 0.00,
  children,
}) => {
  return (
    <article>
      <hgroup>
        <h1 data-testid="heading">{ heading }</h1>
        <h2 data-testid="subheading">{ subHeading }</h2>
        <p data-testid="price">
          $&nbsp;
          <span id="price-value">{price}</span>
        </p>
      </hgroup>
      <main data-testid="main">
        {children}
      </main>
    </article>
  );
};
export default Article;
