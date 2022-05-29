import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountDownValue = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  position: absolute;
`;
export default { Wrapper, CountDownValue };
