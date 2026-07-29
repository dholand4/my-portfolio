import styled from 'styled-components';

export const Bar = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 28px 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.fgDim};
  text-align: center;
`;
