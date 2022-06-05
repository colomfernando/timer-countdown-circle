import { useState, useEffect } from 'react';
import {
  calculateInitialTime,
  calculateRemainingMinutes,
  calculateRemainingSeconds,
} from './utils';

export interface PropsUseCountDown {
  minutes: number;
  seconds: number;
}

export interface ResponseUseCountDown extends PropsUseCountDown {
  remainingTime: number;
  start: () => void;
  pause: () => void;
}
type Interval = ReturnType<typeof setInterval>;

const useCountDown = ({
  minutes,
  seconds,
}: PropsUseCountDown): ResponseUseCountDown => {
  const [remainingTime, setRemainingTime] = useState(
    calculateInitialTime(minutes, seconds)
  );

  const [isActive, setIsActive] = useState(false);

  const countDown = (interval: Interval) => {
    setRemainingTime((time) => {
      if (time - 1000 < 0) {
        clearInterval(interval);
        return 0;
      }

      return time - 1000;
    });
  };

  useEffect(() => {
    let timer: Interval;
    if (isActive) {
      timer = setInterval(() => countDown(timer), 1000);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  return {
    remainingTime,
    minutes: calculateRemainingMinutes(remainingTime),
    seconds: calculateRemainingSeconds(remainingTime),
    start: () => setIsActive(true),
    pause: () => setIsActive(false),
  };
};

export default useCountDown;
