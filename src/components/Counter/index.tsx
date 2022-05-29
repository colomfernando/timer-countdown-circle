import React, { useEffect } from 'react';
import Styles from './styles';
import Circle from 'components/Circle';
import useCountDown from 'hooks/useCountDown';

const Counter: React.FC = () => {
  const { minutes, seconds, start, clear } = useCountDown({
    minutes: 10,
    seconds: 0,
  });

  const addZero = (value: number): string =>
    value < 10 ? `0${value}` : String(value);

  useEffect(() => {
    start();
    return () => clear();
  }, []);
  return (
    <Styles.Wrapper>
      <Circle />
      <Styles.CountDownValue>
        {`${addZero(minutes)}:${addZero(seconds)}`}
      </Styles.CountDownValue>
    </Styles.Wrapper>
  );
};

export default Counter;
