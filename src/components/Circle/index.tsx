import React from 'react';
import Styles from './styles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import palette from 'theme/palette';

export interface PropsCircle {
  text: string;
  percentage: number;
}

const Circle: React.FC<PropsCircle> = ({ text, percentage }) => {
  const textColor = percentage < 20 ? palette.red : palette.green;
  const pathColor = percentage < 20 ? palette.red : palette.green;

  return (
    <Styles.Wrapper>
      <CircularProgressbar
        strokeWidth={5}
        value={percentage}
        text={text}
        counterClockwise
        styles={buildStyles({
          textColor,
          pathColor,
          pathTransitionDuration: 1,
        })}
      />
    </Styles.Wrapper>
  );
};

export default Circle;
