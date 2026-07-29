import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  50% { opacity: 0; }
`;

export const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(1rem, 2.2vw, 1.35rem);
  color: ${({ theme }) => theme.colors.fg};
  margin-bottom: 36px;
  min-height: 1.6em;
`;

export const Prompt = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 10px;
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 9px;
  height: 1.05em;
  background: ${({ theme }) => theme.colors.accent};
  margin-left: 4px;
  vertical-align: -2px;
  animation: ${blink} 1s steps(1) infinite;
`;
