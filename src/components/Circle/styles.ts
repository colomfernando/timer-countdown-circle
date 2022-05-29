import styled from 'styled-components';
import palette from 'theme/palette';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  max-width: 300px;
`;

const Group = styled.g`
  fill: none;
  stroke: none;
`;

const Circle = styled.circle`
  stroke-width: 7px;
  stroke: ${palette.grey};
`;

export default { Wrapper, Group, Circle };
