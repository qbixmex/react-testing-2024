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
        <h1>{ heading }</h1>
        <h2>{ subHeading }</h2>
        <p>
          $&nbsp;
          <span id="price">{price}</span>
        </p>
      </hgroup>
      <main data-testid="main">{children}</main>
    </article>
  );
};
export default Article;
