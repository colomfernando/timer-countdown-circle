import styled from 'styled-components';
import palette from 'theme/palette';
import { hexToRgb } from 'theme/palette';

const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  fill: ${palette.red};
  &:hover {
    fill: rgba(${hexToRgb(palette.red)}, 0.8);
  }
`;

export default { Button };
