import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $visible: boolean; $stretch: boolean }>`
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity ${({ theme }) => theme.motion.slow},
    transform ${({ theme }) => theme.motion.slow};

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  ${({ $stretch }) =>
    $stretch &&
    css`
      height: 100%;
      display: flex;
      flex-direction: column;

      & > * {
        flex: 1;
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
  }
`;
