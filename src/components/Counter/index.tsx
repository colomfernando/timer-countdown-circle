import React, { useEffect, useState } from 'react';
import Styles from './styles';
import Circle from 'components/Circle';
import useCountDown from 'hooks/useCountDown';
import Button from 'components/Button';
import PlayIcon from 'components/PlayIcon';
import PauseIcon from 'components/PauseIcon';
import RestartIcon from 'components/RestartIcon';

const Counter: React.FC = () => {
  const totalMinutes = 1;

  const { minutes, seconds, start, pause, restart, remainingTime } =
    useCountDown({
      minutes: totalMinutes,
      seconds: 0,
    });

  const [percentage, setPercentage] = useState(100);

  const addZero = (value: number): string =>
    value < 10 ? `0${value}` : String(value);

  const handleClickStart = () => {
    start();
  };

  const handleClickPause = () => {
    pause();
  };

  const handleClickRestart = () => {
    setPercentage(100);
    restart();
  };

  useEffect(() => {
    const calculatePercentage =
      (remainingTime / 1000 / (totalMinutes * 60)) * 100;
    if (calculatePercentage < 100) {
      setPercentage(calculatePercentage);
    }
  }, [remainingTime]);

  return (
    <Styles.Wrapper>
      <Circle
        percentage={percentage}
        text={`${addZero(minutes)}:${addZero(seconds)}`}
      />
      <Styles.Controls>
        <Button onClick={handleClickStart}>
          <PlayIcon />
        </Button>
        <Button onClick={handleClickPause}>
          <PauseIcon />
        </Button>
        <Button onClick={handleClickRestart}>
          <RestartIcon />
        </Button>
      </Styles.Controls>
    </Styles.Wrapper>
  );
};

export default Counter;
