import styled, { css } from 'styled-components';

export const Label = styled.div<{ $centered: boolean }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '';
    width: 30px;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
  }

  ${({ $centered }) =>
    $centered &&
    css`
      justify-content: center;
    `}
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: clamp(1.8rem, 4.5vw, 2.6rem);
  letter-spacing: -0.03em;
  margin-bottom: 48px;
`;
