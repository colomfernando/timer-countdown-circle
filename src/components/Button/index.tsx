import React from 'react';
import Styles from './styles';

export interface PropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}
const Button: React.FC<PropsButton> = ({ onClick, children, ...props }) => {
  return (
    <Styles.Button onClick={onClick} {...props}>
      {children}
    </Styles.Button>
  );
};

export default Button;
