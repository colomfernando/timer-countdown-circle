import React from 'react';
import Styles from './styles';

const Circle: React.FC = () => {
  return (
    <Styles.Wrapper>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <Styles.Group>
          <Styles.Circle cx="50" cy="50" r="45" />
        </Styles.Group>
      </svg>
    </Styles.Wrapper>
  );
};

export default Circle;
