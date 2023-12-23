import { CounterDynamic } from '../components';
import { useCounterDynamic } from '../hooks';

const AboutPage = () => {
  const {
    count, handleIncrement, handleDecrement, handleReset,
  } = useCounterDynamic();

  return (
    <>
      <h1>About Page</h1>

      <CounterDynamic
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </>
  );
};

export default AboutPage;
