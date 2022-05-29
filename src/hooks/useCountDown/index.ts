import { useState } from 'react';
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
  start: () => void | undefined;
  clear: () => void | undefined;
}

const useCountDown = ({
  minutes,
  seconds,
}: PropsUseCountDown): ResponseUseCountDown => {
  let timer: ReturnType<typeof setInterval>;

  const [remainingTime, setRemainingTime] = useState(
    calculateInitialTime(minutes, seconds)
  );

  const countDown = () => {
    setRemainingTime((time) => {
      if (time - 1000 < 0) {
        clearInterval(timer);
        return 0;
      }

      return time - 1000;
    });
  };

  const interval = () => {
    timer = setInterval(countDown, 1000);
  };

  return {
    remainingTime,
    minutes: calculateRemainingMinutes(remainingTime),
    seconds: calculateRemainingSeconds(remainingTime),
    start: interval,
    clear: () => clearInterval(timer),
  };
};

export default useCountDown;
