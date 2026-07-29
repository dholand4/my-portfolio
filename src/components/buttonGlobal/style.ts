import styled, { css } from 'styled-components';
import { ButtonVariant } from './types';

const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.ctaText};
    border: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 40px -8px ${({ theme }) => theme.colors.accentGlow};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.fg};
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};

    &:hover {
      border-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.accent};
      box-shadow: none;
    }
  `,
};

export const Anchor = styled.a<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 26px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 700;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.radii.md}px;
  transition:
    transform ${({ theme }) => theme.motion.fast},
    box-shadow ${({ theme }) => theme.motion.fast},
    color ${({ theme }) => theme.motion.fast},
    border-color ${({ theme }) => theme.motion.fast};
  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.accentGlow};
  cursor: pointer;
  ${({ $variant }) => variantStyles[$variant]}
`;

export const Arrow = styled.span`
  transition: transform ${({ theme }) => theme.motion.fast};

  ${Anchor}:hover & {
    transform: translateX(4px);
  }
`;
