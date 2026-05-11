import styled from 'styled-components';

export const Svg = styled.svg<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  display: inline-block;
  flex-shrink: 0;
`;
