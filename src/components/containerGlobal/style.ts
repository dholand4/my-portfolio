import styled from 'styled-components';

export const Box = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth}px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
`;
